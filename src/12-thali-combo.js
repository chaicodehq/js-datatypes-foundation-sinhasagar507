/**
 * 🍽️ Thali Combo Platter - Mixed Methods Capstone
 *
 * Grand Indian Thali restaurant mein combo platter system banana hai.
 * String, Number, Array, aur Object — sab methods mila ke ek complete
 * thali banao. Yeh capstone challenge hai — sab kuch combine karo!
 *
 * Data format: thali = {
 *   name: "Rajasthani Thali",
 *   items: ["dal baati", "churma", "papad"],
 *   price: 250,
 *   isVeg: true
 * }
 *
 * Functions:
 *
 *   1. createThaliDescription(thali)
 *      - Template literal, .join(", "), .toUpperCase(), .toFixed(2) use karo
 *      - Format: "{NAME} (Veg/Non-Veg) - Items: {items joined} - Rs.{price}"
 *      - name ko UPPERCASE karo, price ko 2 decimal places tak
 *      - isVeg true hai toh "Veg", false hai toh "Non-Veg"
 *      - Agar thali object nahi hai ya required fields missing hain, return ""
 *      - Required fields: name (string), items (array), price (number), isVeg (boolean)
 *      - Example: createThaliDescription({name:"Rajasthani Thali", items:["dal","churma"], price:250, isVeg:true})
 *                 => "RAJASTHANI THALI (Veg) - Items: dal, churma - Rs.250.00"
 *
 *   2. getThaliStats(thalis)
 *      - Array of thali objects ka stats nikalo
 *      - .filter() se veg/non-veg count
 *      - .reduce() se average price
 *      - Math.min/Math.max se cheapest/costliest
 *      - .map() se saare names
 *      - Return: { totalThalis, vegCount, nonVegCount, avgPrice (2 decimal string),
 *                  cheapest (number), costliest (number), names (array) }
 *      - Agar thalis array nahi hai ya empty hai, return null
 *
 *   3. searchThaliMenu(thalis, query)
 *      - .filter() + .includes() se search karo (case-insensitive)
 *      - Thali match karti hai agar name ya koi bhi item query include kare
 *      - Agar thalis array nahi hai ya query string nahi hai, return []
 *      - Example: searchThaliMenu(thalis, "dal") => thalis with "dal" in name or items
 *
 *   4. generateThaliReceipt(customerName, thalis)
 *      - Template literals + .map() + .join("\n") + .reduce() se receipt banao
 *      - Format:
 *        "THALI RECEIPT\n---\nCustomer: {NAME}\n{line items}\n---\nTotal: Rs.{total}\nItems: {count}"
 *      - Line item: "- {thali name} x Rs.{price}"
 *      - customerName UPPERCASE mein
 *      - Agar customerName string nahi hai ya thalis array nahi hai/empty hai, return ""
 *
 * @example
 *   createThaliDescription({name:"Rajasthani Thali", items:["dal"], price:250, isVeg:true})
 *   // => "RAJASTHANI THALI (Veg) - Items: dal - Rs.250.00"
 */
export function createThaliDescription(thali) {
  // 1. Validation: Check if thali is an object and has all required fields
  if (
    typeof thali !== "object" || 
    thali === null || 
    typeof thali.name !== "string" || 
    !Array.isArray(thali.items) || 
    typeof thali.price !== "number" || 
    typeof thali.isVeg !== "boolean"
  ) {
    return "";
  }

  // 2. Logic: Format the components
  const nameUpper = thali.name.toUpperCase();
  const vegStatus = thali.isVeg ? "Veg" : "Non-Veg";
  const itemsList = thali.items.join(", ");
  const formattedPrice = thali.price.toFixed(2);

  // 3. Return using Template Literal
  return `${nameUpper} (${vegStatus}) - Items: ${itemsList} - Rs.${formattedPrice}`;
}

export function getThaliStats(thalis) {
  if (!Array.isArray(thalis) || thalis.length === 0) return null;

  const totalThalis = thalis.length;
  const vegCount = thalis.filter(t => t.isVeg).length;
  const nonVegCount = totalThalis - vegCount;
  
  const prices = thalis.map(t => t.price);
  const cheapest = Math.min(...prices);
  const costliest = Math.max(...prices);
  
  const totalSum = thalis.reduce((sum, t) => sum + t.price, 0);
  const avgPrice = (totalSum / totalThalis).toFixed(2);
  
  const names = thalis.map(t => t.name);

  return { 
    totalThalis, 
    vegCount, 
    nonVegCount, 
    avgPrice, 
    cheapest, 
    costliest, 
    names 
  };
}

export function searchThaliMenu(thalis, query) {
  if (!Array.isArray(thalis) || typeof query !== "string") return [];

  const lowerQuery = query.toLowerCase();

  return thalis.filter(thali => {
    const nameMatch = thali.name.toLowerCase().includes(lowerQuery);
    const itemMatch = thali.items.some(item => 
      item.toLowerCase().includes(lowerQuery)
    );
    return nameMatch || itemMatch;
  });
}

export function generateThaliReceipt(customerName, thalis) {
  if (typeof customerName !== "string" || !Array.isArray(thalis) || thalis.length === 0) {
    return "";
  }

  const nameUpper = customerName.toUpperCase();
  const totalPrice = thalis.reduce((sum, t) => sum + t.price, 0);
  
  // Create line items: "- {name} x Rs.{price}"
  const lineItems = thalis
    .map(t => `- ${t.name} x Rs.${t.price}`)
    .join("\n");

  return `THALI RECEIPT
---
Customer: ${nameUpper}
${lineItems}
---
Total: Rs.${totalPrice}
Items: ${thalis.length}`;
}