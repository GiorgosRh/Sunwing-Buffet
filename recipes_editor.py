#!/usr/bin/env python3
"""
Sunwing Buffet — Recipe Editor
Διαβάζει, εμφανίζει και επεξεργάζεται τις συνταγές από το recipes.html
"""

import re
import json
import sys
import os

HTML_FILE = os.path.join(os.path.dirname(__file__), "recipes.html")

# ─── PARSE ───────────────────────────────────────────────────────────────────

def load_recipes(path=HTML_FILE):
    """Διαβάζει το HTML και επιστρέφει (list_of_recipes, start_pos, end_pos)."""
    with open(path, encoding="utf-8") as f:
        content = f.read()

    # Βρίσκει το μπλοκ const RECIPES = [ ... ];
    m = re.search(r'const RECIPES = (\[.*?\]);', content, re.DOTALL)
    if not m:
        sys.exit("ERROR: Δεν βρέθηκε το RECIPES array στο HTML.")

    raw = m.group(1)
    start, end = m.start(1), m.end(1)

    # JS → JSON μετατροπή (απλά patterns)
    json_str = js_to_json(raw)

    try:
        recipes = json.loads(json_str)
    except json.JSONDecodeError as e:
        sys.exit(f"ERROR: Αποτυχία parsing JSON: {e}")

    return recipes, content, start, end


def js_to_json(js: str) -> str:
    """Μετατροπή JS object literal → JSON (state-machine για strings)."""
    # Αφαίρεση single-line comments (εκτός strings)
    js = _remove_js_comments(js)
    # Trailing commas πριν } ή ]
    js = re.sub(r',\s*([}\]])', r'\1', js)
    # Unquoted keys → quoted (state-aware)
    js = _quote_js_keys(js)
    return js


def _remove_js_comments(s: str) -> str:
    """Αφαιρεί JS // comments χωρίς να πειράξει strings."""
    result = []
    i = 0
    in_str = False
    str_char = ''
    while i < len(s):
        c = s[i]
        if in_str:
            result.append(c)
            if c == '\\':
                i += 1
                if i < len(s):
                    result.append(s[i])
            elif c == str_char:
                in_str = False
        elif c in ('"', "'"):
            in_str = True
            str_char = c
            result.append(c)
        elif c == '/' and i + 1 < len(s) and s[i+1] == '/':
            # Skip until newline
            while i < len(s) and s[i] != '\n':
                i += 1
            continue
        else:
            result.append(c)
        i += 1
    return ''.join(result)


def _quote_js_keys(s: str) -> str:
    """Quotes unquoted JS object keys, state-aware (skips strings)."""
    result = []
    i = 0
    in_str = False
    str_char = ''
    while i < len(s):
        c = s[i]
        if in_str:
            result.append(c)
            if c == '\\':
                i += 1
                if i < len(s):
                    result.append(s[i])
            elif c == str_char:
                in_str = False
        elif c in ('"', "'"):
            in_str = True
            str_char = c
            result.append('"')  # normalise to double-quote
        else:
            # Check for unquoted key: word chars followed by optional spaces and ':'
            m = re.match(r'([A-Za-z_]\w*)(\s*:)(?!:)', s[i:])
            if m:
                result.append('"')
                result.append(m.group(1))
                result.append('"')
                result.append(m.group(2))
                i += len(m.group(0))
                continue
            result.append(c)
        i += 1
    return ''.join(result)


def save_recipes(recipes, content, start, end, path=HTML_FILE):
    """Γράφει πίσω τις συνταγές στο HTML."""
    new_json = json.dumps(recipes, ensure_ascii=False, indent=2)
    # Μετατροπή σε JS (ξαναγράφουμε unquoted keys)
    new_js = json_to_js(new_json)
    new_content = content[:start] + new_js + content[end:]
    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("✅ Αποθηκεύτηκε!")


def json_to_js(json_str: str) -> str:
    """JSON → JS (unquoted keys)."""
    js = re.sub(r'"(\w+)":', r'\1:', json_str)
    return js


# ─── DISPLAY ─────────────────────────────────────────────────────────────────

def list_recipes(recipes):
    print("\n═══ ΣΥΝΤΑΓΕΣ ═══")
    for r in recipes:
        print(f"  [{r['id']:>2}] {r['flag']}  {r['name']}  ({r['themeLabel']})")
    print()


def show_recipe(r):
    print(f"\n{'═'*60}")
    print(f"  {r['flag']}  {r['name']}  (id: {r['id']})")
    print(f"  {r['themeLabel']}")
    print(f"  Προετοιμασία: {r['prepTime']} λεπτά | Μαγείρεμα: {r['cookTime']} λεπτά | Σύνολο: {r['totalTime']} λεπτά")
    print(f"  Μερίδες: {r['portions']}")
    print(f"\n  ΥΛΙΚΑ:")
    for i, ing in enumerate(r['ingredients'], 1):
        note = f"  [{ing.get('note','')}]" if ing.get('note') else ''
        print(f"    {i:>2}. {ing['name']} — {ing['qty']}{note}")
    print(f"\n  ΒΗΜΑΤΑ:")
    for i, s in enumerate(r['steps'], 1):
        timing = f"  {s.get('time','')}" if s.get('time') else ''
        print(f"    {i}. {s['text']}{timing}")
    allergens = ', '.join(r.get('allergens', [])) or '—'
    print(f"\n  ΑΛΛΕΡΓΙΟΓΟΝΑ: {allergens}")
    print(f"\n  ΣΗΜΕΙΩΣΕΙΣ: {r.get('notes','')}")
    print(f"{'═'*60}\n")


# ─── EDIT ────────────────────────────────────────────────────────────────────

def find_recipe(recipes, rid):
    for r in recipes:
        if r['id'] == rid:
            return r
    return None


def edit_basic(r):
    """Επεξεργασία βασικών πεδίων."""
    fields = ['name', 'themeLabel', 'prepTime', 'cookTime', 'totalTime', 'portions']
    print("\nΒασικά πεδία (Enter για διατήρηση τρέχουσας τιμής):")
    for f in fields:
        val = input(f"  {f} [{r[f]}]: ").strip()
        if val:
            r[f] = val


def edit_ingredients(r):
    """Επεξεργασία υλικών."""
    while True:
        print(f"\n  ΥΛΙΚΑ [{r['name']}]:")
        for i, ing in enumerate(r['ingredients'], 1):
            note = f"  [{ing.get('note','')}]" if ing.get('note') else ''
            print(f"    {i:>2}. {ing['name']} — {ing['qty']}{note}")
        print("\n  [a] Προσθήκη  [e <n>] Επεξεργασία  [d <n>] Διαγραφή  [q] Έξοδος")
        cmd = input("  > ").strip()
        if cmd == 'q':
            break
        elif cmd == 'a':
            name = input("    Όνομα υλικού: ").strip()
            qty  = input("    Ποσότητα: ").strip()
            note = input("    Σημείωση (προαιρετικό): ").strip()
            ing = {"name": name, "qty": qty}
            if note:
                ing["note"] = note
            r['ingredients'].append(ing)
            print("    ✅ Προστέθηκε.")
        elif cmd.startswith('e '):
            try:
                idx = int(cmd.split()[1]) - 1
                ing = r['ingredients'][idx]
                new_name = input(f"    Όνομα [{ing['name']}]: ").strip()
                new_qty  = input(f"    Ποσότητα [{ing['qty']}]: ").strip()
                new_note = input(f"    Σημείωση [{ing.get('note','')}]: ").strip()
                if new_name: ing['name'] = new_name
                if new_qty:  ing['qty'] = new_qty
                if new_note: ing['note'] = new_note
                print("    ✅ Ενημερώθηκε.")
            except (IndexError, ValueError):
                print("    ❌ Μη έγκυρος αριθμός.")
        elif cmd.startswith('d '):
            try:
                idx = int(cmd.split()[1]) - 1
                removed = r['ingredients'].pop(idx)
                print(f"    ✅ Διαγράφηκε: {removed['name']}")
            except (IndexError, ValueError):
                print("    ❌ Μη έγκυρος αριθμός.")
        else:
            print("    ❓ Άγνωστη εντολή.")


def edit_steps(r):
    """Επεξεργασία βημάτων."""
    while True:
        print(f"\n  ΒΗΜΑΤΑ [{r['name']}]:")
        for i, s in enumerate(r['steps'], 1):
            timing = f"  {s.get('time','')}" if s.get('time') else ''
            preview = s['text'][:60] + ('…' if len(s['text']) > 60 else '')
            print(f"    {i:>2}. {preview}{timing}")
        print("\n  [a] Προσθήκη  [e <n>] Επεξεργασία  [d <n>] Διαγραφή  [q] Έξοδος")
        cmd = input("  > ").strip()
        if cmd == 'q':
            break
        elif cmd == 'a':
            text = input("    Κείμενο βήματος: ").strip()
            time = input("    Χρόνος (π.χ. ⏱ 30 λεπτά, ή κενό): ").strip()
            r['steps'].append({"text": text, "time": time})
            print("    ✅ Προστέθηκε.")
        elif cmd.startswith('e '):
            try:
                idx = int(cmd.split()[1]) - 1
                s = r['steps'][idx]
                new_text = input(f"    Κείμενο [{s['text'][:40]}…]: ").strip()
                new_time = input(f"    Χρόνος [{s.get('time','')}]: ").strip()
                if new_text: s['text'] = new_text
                if new_time: s['time'] = new_time
                print("    ✅ Ενημερώθηκε.")
            except (IndexError, ValueError):
                print("    ❌ Μη έγκυρος αριθμός.")
        elif cmd.startswith('d '):
            try:
                idx = int(cmd.split()[1]) - 1
                removed = r['steps'].pop(idx)
                print(f"    ✅ Διαγράφηκε βήμα {idx+1}.")
            except (IndexError, ValueError):
                print("    ❌ Μη έγκυρος αριθμός.")
        else:
            print("    ❓ Άγνωστη εντολή.")


def edit_allergens_notes(r):
    """Επεξεργασία αλλεργιογόνων και σημειώσεων."""
    current = ', '.join(r.get('allergens', []))
    new_a = input(f"  Αλλεργιογόνα (comma-separated) [{current}]: ").strip()
    if new_a:
        r['allergens'] = [a.strip() for a in new_a.split(',') if a.strip()]

    new_n = input(f"  Σημειώσεις [{r.get('notes','')[:50]}…]: ").strip()
    if new_n:
        r['notes'] = new_n


def add_recipe(recipes):
    """Προσθήκη νέας συνταγής."""
    print("\n═══ ΝΕΑ ΣΥΝΤΑΓΗ ═══")
    new_id = max(r['id'] for r in recipes) + 1
    r = {
        "id": new_id,
        "theme": input("  theme (π.χ. greek, italian): ").strip(),
        "flag": input("  flag emoji: ").strip(),
        "themeLabel": input("  themeLabel: ").strip(),
        "name": input("  Όνομα συνταγής: ").strip(),
        "prepTime": input("  prepTime (λεπτά): ").strip(),
        "cookTime": input("  cookTime (λεπτά): ").strip(),
        "totalTime": input("  totalTime (λεπτά): ").strip(),
        "portions": input("  Μερίδες (π.χ. 14–18): ").strip(),
        "ingredients": [],
        "steps": [],
        "allergens": [],
        "notes": "",
    }
    recipes.append(r)
    print(f"\n  ✅ Δημιουργήθηκε συνταγή id={new_id}. Πρόσθεσε υλικά και βήματα.")
    edit_ingredients(r)
    edit_steps(r)
    edit_allergens_notes(r)
    return r


# ─── MAIN MENU ───────────────────────────────────────────────────────────────

def main():
    print("🍽️  Sunwing Buffet — Recipe Editor")
    recipes, content, start, end = load_recipes()
    modified = False

    while True:
        print("\n═══ ΚΥΡΙΟ ΜΕΝΟΥ ═══")
        print("  [l]  Λίστα συνταγών")
        print("  [v]  Εμφάνιση συνταγής")
        print("  [e]  Επεξεργασία συνταγής")
        print("  [a]  Προσθήκη νέας συνταγής")
        print("  [s]  Αποθήκευση αλλαγών")
        print("  [q]  Έξοδος (χωρίς αποθήκευση αν δεν έχεις κάνει [s])")
        cmd = input("\n> ").strip().lower()

        if cmd == 'l':
            list_recipes(recipes)

        elif cmd == 'v':
            list_recipes(recipes)
            try:
                rid = int(input("  ID συνταγής: "))
                r = find_recipe(recipes, rid)
                if r:
                    show_recipe(r)
                else:
                    print("  ❌ Δεν βρέθηκε.")
            except ValueError:
                print("  ❌ Μη έγκυρο ID.")

        elif cmd == 'e':
            list_recipes(recipes)
            try:
                rid = int(input("  ID συνταγής για επεξεργασία: "))
                r = find_recipe(recipes, rid)
                if not r:
                    print("  ❌ Δεν βρέθηκε.")
                    continue
                show_recipe(r)
                print("  [1] Βασικά πεδία  [2] Υλικά  [3] Βήματα  [4] Αλλεργιογόνα/Σημ.")
                sub = input("  Τι να επεξεργαστώ; ").strip()
                if sub == '1':
                    edit_basic(r)
                elif sub == '2':
                    edit_ingredients(r)
                elif sub == '3':
                    edit_steps(r)
                elif sub == '4':
                    edit_allergens_notes(r)
                modified = True
            except ValueError:
                print("  ❌ Μη έγκυρο ID.")

        elif cmd == 'a':
            add_recipe(recipes)
            modified = True

        elif cmd == 's':
            # Reload content σε περίπτωση που άλλαξε αλλού
            _, content, start, end = load_recipes()
            save_recipes(recipes, content, start, end)
            modified = False

        elif cmd == 'q':
            if modified:
                confirm = input("  ⚠️  Υπάρχουν αλλαγές που ΔΕΝ έχουν αποθηκευτεί! Έξοδος; [y/N] ").strip().lower()
                if confirm != 'y':
                    continue
            print("  Αντίο!")
            break

        else:
            print("  ❓ Άγνωστη εντολή.")


if __name__ == "__main__":
    main()
