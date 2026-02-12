/**
 * ☕ Chai Tapri Order System - String Basics
 *
 * Guddu ki chai tapri hai college ke bahar. Customers order dete hain,
 * aur Guddu ko string methods use karke orders handle karne hain.
 * Tu Guddu ka helper hai — basic string methods seekh aur orders process kar!
 *
 * Methods to explore: .length, .toUpperCase(), .toLowerCase(),
 *   .trim(), .includes(), .charAt(), .at()
 *
 * Functions:
 *
 *   1. getChaiOrderLength(order)
 *      - Pehle .trim() se extra spaces hatao, phir .length se count karo
 *      - Agar order string nahi hai, return -1
 *      - Example: getChaiOrderLength("  masala chai  ") => 11
 *
 *   2. shoutChaiOrder(order)
 *      - Guddu apne helper ko UPPERCASE mein order shout karta hai
 *      - Pehle .trim() karo, phir .toUpperCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: shoutChaiOrder("masala chai") => "MASALA CHAI"
 *
 *   3. whisperChaiOrder(order)
 *      - Jab koi secretly order karta hai, lowercase mein likho
 *      - Pehle .trim() karo, phir .toLowerCase()
 *      - Agar order string nahi hai ya trim ke baad empty hai, return ""
 *      - Example: whisperChaiOrder("ADRAK CHAI") => "adrak chai"
 *
 *   4. hasSpecialIngredient(order, ingredient)
 *      - Check karo ki order mein koi special ingredient hai ya nahi
 *      - Dono ko .toLowerCase() karo, phir .includes() use karo
 *      - Agar koi bhi string nahi hai, return false
 *      - Example: hasSpecialIngredient("Elaichi Masala Chai", "elaichi") => true
 *
 *   5. getFirstAndLastChar(order)
 *      - .charAt(0) se pehla character aur .at(-1) se aakhri character nikalo
 *      - Pehle .trim() karo
 *      - Return: { first, last }
 *      - Agar order string nahi hai ya trim ke baad empty hai, return null
 *      - Example: getFirstAndLastChar("masala chai") => { first: "m", last: "i" }
 *
 * @example
 *   getChaiOrderLength("  masala chai  ")  // => 11
 *   shoutChaiOrder("masala chai")          // => "MASALA CHAI"
 *   hasSpecialIngredient("Elaichi Chai", "elaichi")  // => true
 */
export function getChaiOrderLength(order) {
  // 1. If not a string, return -1 (Not "")
  if (typeof order !== 'string') return -1;
  
  // 2. Trim and return the length
  // If order is "   ", order.trim() is "", and "".length is 0.
  return order.trim().length;
}

export function shoutChaiOrder(order) {
  // Your code here
  if (typeof order !== "string") return ""; 
  const cleanedOrder = order.trim(); 
  return cleanedOrder === "" ? "": cleanedOrder.toUpperCase();
}

export function whisperChaiOrder(order) {
  // Your code here
  if (typeof order !== "string") return ""; 
  const cleanedOrder = order.trim(); 
  return cleanedOrder === "" ? "": cleanedOrder.toLowerCase(); 
}

export function hasSpecialIngredient(order, ingredient) {
  // Your code here
  if (typeof order !== "string" || typeof ingredient !== "string") {
    return false;
  }

  // 2. Normalization: Convert both to lowercase so that "Ginger" matches "ginger"
  const lowerOrder = order.toLowerCase();
  const lowerIngredient = ingredient.toLowerCase();

  // 3. Search: Use the .includes() method to check if the ingredient exists in the order
  return lowerOrder.includes(lowerIngredient);
}

export function getFirstAndLastChar(order) {
  // 1. Check if the input is a valid string
  if (typeof order !== "string") return null;

  // 2. Trim the spaces and check if the string is empty
  const cleanedOrder = order.trim();
  if (cleanedOrder === "") return null;

  // 3. Extract the first and last characters
  // .charAt(0) is the classic way for the start
  // .at(-1) is the modern way to count from the end
  return {
    first: cleanedOrder.charAt(0),
    last: cleanedOrder.at(-1)
  };
}
