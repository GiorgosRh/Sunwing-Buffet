// ── HELIOS & ELLA · i18n ─────────────────────────────────────────────────────
const I18N = {
  el: {
    // Common
    "nav.back":            "← Portal",
    "theme.title":         "Εναλλαγή θέματος",
    "lang.label":          "EN",
    "lang.title":          "Switch to English",

    // Index
    "index.tagline":       "Κεντρικό σύστημα διαχείρισης κουζίνας — μενού, συνταγές, λίστες εργασιών και προγραμματισμός βαρδιών για τα εστιατόρια Helios & Ella.",
    "index.today":         "Σήμερα",
    "index.tonight":       "Θεματική Βραδιά",
    "index.dinner.sub":    "Dinner Service · 17:30",
    "index.next":          "Επόμενη Βραδιά",
    "index.tomorrow":      "Αύριο",
    "index.calendar":      "Εβδομαδιαίο Πρόγραμμα Θεματικών",

    "mod.menu.tag":        "Εβδομαδιαίο Πρόγραμμα",
    "mod.menu.desc":       "Πλήρες μενού ανά ημέρα. Θεματικές βραδιές, σταθμοί, γεύμα & δείπνο με ανά κατηγορία ανάλυση.",
    "mod.menu.stat1":      "7 θεματικές",
    "mod.menu.stat2":      "Γεύμα + Δείπνο",
    "mod.recipes.tag":     "Συνταγολόγιο",
    "mod.recipes.desc":    "Υλικά & ποσότητες, βήματα προετοιμασίας, χρόνοι μαγειρέματος και αλλεργιογόνα.",
    "mod.recipes.stat1":   "22 συνταγές",
    "mod.tasks.tag":       "Διαχείριση Κουζίνας",
    "mod.tasks.desc":      "AI-generated λίστες εργασιών ανά σταθμό. Mise en place, χρονοδιάγραμμα βάρδιας, progress tracking.",
    "mod.tasks.stat1":     "6 σταθμοί",
    "mod.tech.desc":       "Θεμελιώδεις τεχνικές επαγγελματικής κουζίνας — stocks, sauces, κρέας, ψάρι, λαχανικά, HACCP.",
    "mod.tech.stat1":      "15 τεχνικές",
    "mod.tech.stat2":      "6 κατηγορίες",
    "mod.pair.desc":       "Συνδυασμοί γεύσεων από κουζίνες όλου του κόσμου — ανά κουζίνα, εποχή, spice blends και αντικαταστάσεις.",
    "mod.pair.stat1":      "24 κουζίνες",
    "mod.pair.stat2":      "4 εποχές",

    // Kitchen
    "kitchen.btn.dinner":  "🌙 ΔΕΙΠΝΟ",
    "kitchen.btn.lunch":   "☀️ ΓΕΥΜΑ",
    "kitchen.btn.shift":   "📋 ΒΑΡΔΙΑ",
    "kitchen.day":         "ΗΜΕΡΑ",
    "kitchen.station":     "ΣΤΑΘΜΟΣ",
    "kitchen.progress":    "ΠΡΟΟΔΟΣ",
    "kitchen.tasks":       "εργασίες",
    "kitchen.reset":       "↺ Επαναφορά Λίστας",
    "kitchen.pin.set":     "Ορισμός Κωδικού Admin",
    "kitchen.pin.change":  "Αλλαγή Κωδικού Admin",
    "kitchen.pin.saved":   "Κωδικός αποθηκεύτηκε ✓",
    "kitchen.complete":    "MISE EN PLACE COMPLETE",
    "kitchen.no.tasks":    "Δεν υπάρχουν εργασίες για αυτόν τον σταθμό αυτή τη μέρα.",
    "kitchen.shift.add":   "+ Νέα Εργασία Βάρδιας",
    "kitchen.shift.empty": "Δεν υπάρχουν εργασίες βάρδιας για αυτή τη μέρα.<br>Πατήστε «+ Νέα Εργασία Βάρδιας» για να προσθέσετε.",
    "kitchen.sf.text":     "Περιγραφή εργασίας...",
    "kitchen.sf.assignee": "Ανατίθεται σε...",
    "kitchen.sf.dur":      "Διάρκεια (π.χ. 30')",
    "kitchen.sf.all":      "👨‍🍳 Όλοι",
    "kitchen.sf.submit":   "✓ Προσθήκη Εργασίας",
    "kitchen.unassigned":  "Αδιάθετη",

    "admin.title.auth":    "ΕΠΑΛΗΘΕΥΣΗ ADMIN",
    "admin.title.set":     "ΟΡΙΣΜΟΣ ΚΩΔΙΚΟΥ",
    "admin.title.verify":  "ΑΛΛΑΓΗ ΚΩΔΙΚΟΥ",
    "admin.title.new":     "ΝΕΟΣ ΚΩΔΙΚΟΣ",
    "admin.sub.auth":      "Εισάγετε τον κωδικό admin για να συνεχίσετε.",
    "admin.sub.set":       "Δεν έχει οριστεί κωδικός admin ακόμα.",
    "admin.sub.set2":      "Πληκτρολογήστε τον κωδικό που θέλετε να ορίσετε.",
    "admin.sub.verify":    "Εισάγετε πρώτα τον τρέχοντα κωδικό admin.",
    "admin.sub.new":       "Πληκτρολογήστε τον νέο κωδικό admin.",
    "admin.setup":         "Πρώτη ρύθμιση: ο κωδικός που θα πληκτρολογήσετε θα οριστεί ως κωδικός admin.",
    "admin.cancel":        "Ακύρωση",
    "admin.confirm":       "Επιβεβαίωση",
    "admin.wrong":         "✕ Λάθος κωδικός. Προσπαθήστε ξανά.",

    // Recipes
    "recipes.subtitle":    "Buffet · Sunwing Rhodes 2026",
    "recipes.filter.all":  "🍽️ Όλες",
    "recipes.search":      "Αναζήτηση συνταγής...",
    "recipes.empty":       "Δεν βρέθηκαν συνταγές",
    "recipes.count":       "συνταγές",
    "recipes.tab.ing":     "Υλικά",
    "recipes.tab.steps":   "Βήματα",
    "recipes.tab.timing":  "Χρόνοι",
    "recipes.prep":        "ΠΡΟΕΤΟΙΜΑΣΙΑ",
    "recipes.cook":        "ΜΑΓΕΙΡΕΜΑ",
    "recipes.total":       "ΣΥΝΟΛΟ",
    "recipes.portions":    "ΜΕΡΙΔΕΣ",
    "recipes.allergens":   "Αλλεργιογόνα:",
    "recipes.min":         "λεπτά",
    "recipes.people":      "άτομα",
    "recipes.total.label": "⏱ Σύνολο:",
    "recipes.prep.label":  "🔪 Prep:",
    "recipes.portions.lbl":"👥",
    "recipes.download":    "Λήψη συνταγής",
    "recipes.imported":    "IMPORTED",

    // Techniques
    "tech.search":         "Αναζήτηση τεχνικής...",
    "tech.empty":          "Δεν βρέθηκαν τεχνικές",
    "tech.tab.all":        "Όλες",
    "tech.hero.sub":       "Θεμελιώδεις τεχνικές επαγγελματικής κουζίνας — οργανωμένες ανά κατηγορία για γρήγορη αναφορά κατά τη βάρδια.",
    "tech.btab.tech":      "Τεχνική",
    "tech.btab.keys":      "Key Points",
    "tech.btab.apps":      "Εφαρμογές",

    // Pairings
    "pair.search":         "Αναζήτηση υλικού ή κουζίνας...",
    "pair.empty":          "Δεν βρέθηκαν αποτελέσματα",
    "pair.hero.sub":       "Συνδυασμοί γεύσεων και υλικών από κουζίνες όλου του κόσμου — οργανωμένοι ανά κουζίνα, εποχή, μπαχαρικά και αντικαταστάσεις.",
    "pair.tab.meat":       "🥩 Κρέας ανά Κουζίνα",
    "pair.tab.veg":        "🥦 Λαχανικά ανά Κουζίνα",
    "pair.tab.seasonal":   "🌿 Εποχιακά Pairings",
    "pair.tab.spice":      "🌶️ Spice Blends",
    "pair.tab.sauces":     "🫙 Universal Sauces",
    "pair.tab.subs":       "🔄 Αντικαταστάσεις",
    "pair.keep":           "Κράτα:",
  },

  en: {
    // Common
    "nav.back":            "← Portal",
    "theme.title":         "Toggle theme",
    "lang.label":          "ΕΛ",
    "lang.title":          "Αλλαγή σε Ελληνικά",

    // Index
    "index.tagline":       "Central kitchen management system — menus, recipes, task lists and shift planning for Helios & Ella restaurants.",
    "index.today":         "Today",
    "index.tonight":       "Theme Night",
    "index.dinner.sub":    "Dinner Service · 17:30",
    "index.next":          "Next Night",
    "index.tomorrow":      "Tomorrow",
    "index.calendar":      "Weekly Theme Schedule",

    "mod.menu.tag":        "Weekly Schedule",
    "mod.menu.desc":       "Full menu by day. Theme nights, stations, lunch & dinner with category breakdown.",
    "mod.menu.stat1":      "7 theme nights",
    "mod.menu.stat2":      "Lunch + Dinner",
    "mod.recipes.tag":     "Recipe Library",
    "mod.recipes.desc":    "Ingredients & quantities, preparation steps, cooking times and allergens.",
    "mod.recipes.stat1":   "22 recipes",
    "mod.tasks.tag":       "Kitchen Management",
    "mod.tasks.desc":      "AI-generated task lists per station. Mise en place, shift timeline, progress tracking.",
    "mod.tasks.stat1":     "6 stations",
    "mod.tech.desc":       "Essential professional kitchen techniques — stocks, sauces, meat, fish, vegetables, HACCP.",
    "mod.tech.stat1":      "15 techniques",
    "mod.tech.stat2":      "6 categories",
    "mod.pair.desc":       "Flavor pairings from world cuisines — by cuisine, season, spice blends and substitutions.",
    "mod.pair.stat1":      "24 cuisines",
    "mod.pair.stat2":      "4 seasons",

    // Kitchen
    "kitchen.btn.dinner":  "🌙 DINNER",
    "kitchen.btn.lunch":   "☀️ LUNCH",
    "kitchen.btn.shift":   "📋 SHIFT",
    "kitchen.day":         "DAY",
    "kitchen.station":     "STATION",
    "kitchen.progress":    "PROGRESS",
    "kitchen.tasks":       "tasks",
    "kitchen.reset":       "↺ Reset List",
    "kitchen.pin.set":     "Set Admin PIN",
    "kitchen.pin.change":  "Change Admin PIN",
    "kitchen.pin.saved":   "PIN saved ✓",
    "kitchen.complete":    "MISE EN PLACE COMPLETE",
    "kitchen.no.tasks":    "No tasks for this station today.",
    "kitchen.shift.add":   "+ New Shift Task",
    "kitchen.shift.empty": "No shift tasks for today.<br>Press «+ New Shift Task» to add one.",
    "kitchen.sf.text":     "Task description...",
    "kitchen.sf.assignee": "Assign to...",
    "kitchen.sf.dur":      "Duration (e.g. 30')",
    "kitchen.sf.all":      "👨‍🍳 All Staff",
    "kitchen.sf.submit":   "✓ Add Task",
    "kitchen.unassigned":  "Unassigned",

    "admin.title.auth":    "ADMIN VERIFICATION",
    "admin.title.set":     "SET PIN",
    "admin.title.verify":  "CHANGE PIN",
    "admin.title.new":     "NEW PIN",
    "admin.sub.auth":      "Enter the admin PIN to continue.",
    "admin.sub.set":       "No admin PIN has been set yet.",
    "admin.sub.set2":      "Enter the PIN you want to set.",
    "admin.sub.verify":    "Enter your current admin PIN first.",
    "admin.sub.new":       "Enter your new admin PIN.",
    "admin.setup":         "First setup: the PIN you enter will be set as the admin PIN.",
    "admin.cancel":        "Cancel",
    "admin.confirm":       "Confirm",
    "admin.wrong":         "✕ Wrong PIN. Please try again.",

    // Recipes
    "recipes.subtitle":    "Buffet · Sunwing Rhodes 2026",
    "recipes.filter.all":  "🍽️ All",
    "recipes.search":      "Search recipe...",
    "recipes.empty":       "No recipes found",
    "recipes.count":       "recipes",
    "recipes.tab.ing":     "Ingredients",
    "recipes.tab.steps":   "Steps",
    "recipes.tab.timing":  "Times",
    "recipes.prep":        "PREP",
    "recipes.cook":        "COOK",
    "recipes.total":       "TOTAL",
    "recipes.portions":    "PORTIONS",
    "recipes.allergens":   "Allergens:",
    "recipes.min":         "min",
    "recipes.people":      "people",
    "recipes.total.label": "⏱ Total:",
    "recipes.prep.label":  "🔪 Prep:",
    "recipes.portions.lbl":"👥",
    "recipes.download":    "Download recipe",
    "recipes.imported":    "IMPORTED",

    // Techniques
    "tech.search":         "Search technique...",
    "tech.empty":          "No techniques found",
    "tech.tab.all":        "All",
    "tech.hero.sub":       "Essential professional kitchen techniques — organized by category for quick reference during your shift.",
    "tech.btab.tech":      "Technique",
    "tech.btab.keys":      "Key Points",
    "tech.btab.apps":      "Applications",

    // Pairings
    "pair.search":         "Search ingredient or cuisine...",
    "pair.empty":          "No results found",
    "pair.hero.sub":       "Flavor pairings from world cuisines — organized by cuisine, season, spices and substitutions.",
    "pair.tab.meat":       "🥩 Meat by Cuisine",
    "pair.tab.veg":        "🥦 Vegetables by Cuisine",
    "pair.tab.seasonal":   "🌿 Seasonal Pairings",
    "pair.tab.spice":      "🌶️ Spice Blends",
    "pair.tab.sauces":     "🫙 Universal Sauces",
    "pair.tab.subs":       "🔄 Substitutions",
    "pair.keep":           "Keep:",
  }
};

// ── Core ──────────────────────────────────────────────────────────────────────
const LANG_KEY = "helios_lang";
let currentLang = localStorage.getItem(LANG_KEY) || "el";

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key] !== undefined)
    ? I18N[currentLang][key]
    : (I18N.el[key] !== undefined ? I18N.el[key] : key);
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-ph"));
  });
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    el.title = t(el.getAttribute("data-i18n-title"));
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.textContent = t("lang.label");
    btn.title       = t("lang.title");
  });
}

function toggleLang() {
  currentLang = currentLang === "el" ? "en" : "el";
  localStorage.setItem(LANG_KEY, currentLang);
  applyLang();
  // Re-render dynamic content if these functions exist on this page
  if (typeof renderAll     === "function") renderAll();
  if (typeof render        === "function") render();
  if (typeof renderShiftPanel === "function") renderShiftPanel();
  if (typeof renderPairings === "function") renderPairings();
  if (typeof renderTech    === "function") renderTech();
  if (typeof updatePinBtn  === "function") updatePinBtn();
}

document.addEventListener("DOMContentLoaded", applyLang);
