/**
 * 🍃 Paan Shop Menu - Object Transform
 *
 * Khalil Bhai ki paan shop hai jo purani Delhi mein famous hai.
 * Menu system banana hai jisme objects ko merge karna, freeze karna,
 * aur transform karna hai. Object transform ka tour!
 *
 * Methods to explore: Object.assign(), Object.freeze(),
 *   spread operator {...}, Object.entries(), Object.fromEntries()
 *
 * Functions:
 *
 *   1. createPaanOrder(basePaan, customizations)
 *      - Object.assign({}, basePaan, customizations) se NEW order object banao
 *      - Original basePaan ko mutate MAT karo!
 *      - Agar basePaan object nahi hai ya null hai, return {}
 *      - Agar customizations object nahi hai, sirf basePaan ki copy return karo
 *      - Example: createPaanOrder({type:"meetha",price:30}, {extra:"gulkand",price:50})
 *                 => {type:"meetha", price:50, extra:"gulkand"}
 *
 *   2. freezeMenu(menu)
 *      - Object.freeze() se menu ko immutable banao
 *      - Return: frozen object
 *      - Agar menu object nahi hai ya null hai, return {}
 *      - Frozen ke baad koi modification kaam nahi karegi!
 *      - Example: const frozen = freezeMenu({meetha:30}); frozen.meetha = 100; // still 30
 *
 *   3. updatePrices(menu, increase)
 *      - Object.entries() se [key, value] pairs lo
 *      - Har price mein increase add karo
 *      - Object.fromEntries() se wapas object banao
 *      - Return: NEW object (original mat badlo!)
 *      - Agar menu object nahi hai ya increase number nahi hai, return {}
 *      - Example: updatePrices({meetha:30, saada:20}, 10) => {meetha:40, saada:30}
 *
 *   4. mergeDailySpecials(regularMenu, specialsMenu)
 *      - Spread operator {...regularMenu, ...specialsMenu} se merge karo
 *      - specialsMenu ki values override karengi agar same key ho
 *      - Return: NEW merged object
 *      - Agar koi bhi object nahi hai, usse empty {} maan lo
 *      - Example: mergeDailySpecials({meetha:30}, {chocolate:60, meetha:40})
 *                 => {meetha:40, chocolate:60}
 *
 * @example
 *   createPaanOrder({type:"meetha"}, {extra:"gulkand"}) // => {type:"meetha",extra:"gulkand"}
 *   updatePrices({meetha:30, saada:20}, 10)              // => {meetha:40, saada:30}
 */

// Helper to check for a valid plain object
const isObject = (obj) => {
  return typeof obj === "object" && obj !== null && !Array.isArray(obj);
};

export function createPaanOrder(basePaan, customizations) {
  // Your code here
  if (!isObject(basePaan)) return {};
  
  // If customizations isn't valid, we just return a copy of the base
  const validCustoms = isObject(customizations) ? customizations : {};

  // Object.assign({}, ...) creates a NEW object by merging properties
  return Object.assign({}, basePaan, validCustoms);

}

export function freezeMenu(menu) {
  if (!isObject(menu)) return {};

  // Once frozen, properties cannot be added, removed, or changed
  return Object.freeze(menu);
}

export function updatePrices(menu, increase) {
  if (!isObject(menu) || typeof increase !== 'number') return {};

  // 1. Get entries: [ ["saada", 20], ["meetha", 30] ]
  const entries = Object.entries(menu);
  
  // 2. Map through entries to increase price
  const updatedEntries = entries.map(([name, price]) => [name, price + increase]);

  // 3. Convert back to object: { saada: 30, meetha: 40 }
  return Object.fromEntries(updatedEntries);
}

export function mergeDailySpecials(regularMenu, specialsMenu) {
  // Your code here
  const safeRegular = (typeof regularMenu === "object" && regularMenu !== null && !Array.isArray(regularMenu)) 
    ? regularMenu 
    : {};
    
  const safeSpecials = (typeof specialsMenu === "object" && specialsMenu !== null && !Array.isArray(specialsMenu)) 
    ? specialsMenu 
    : {};

  // Spread operator (...) se merge karo. 
  // Agar dono mein same key hui (e.g., 'meetha'), toh specialsMenu wali value override karegi.
  return { ...safeRegular, ...safeSpecials };
}
