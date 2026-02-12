/**
 * 🏠 Ration Card Registry - Implementation
 */

// Helper to check if it's a valid object (as per your hint)
const isValidRegistry = (registry) => {
  return typeof registry === "object" && registry !== null && !Array.isArray(registry);
};

export function getFamilyNames(registry) {
  if (!isValidRegistry(registry)) return [];

  // Object.keys() returns an array of the property names (IDs)
  return Object.keys(registry);
}

export function getAllFamilies(registry) {
  if (!isValidRegistry(registry)) return [];

  // Object.values() returns an array of the nested family objects
  return Object.values(registry);
}

export function getRationCardEntries(registry) {
  if (!isValidRegistry(registry)) return [];

  // Object.entries() returns an array of [key, value] pairs
  return Object.entries(registry);
}

export function hasRationCard(registry, cardId) {
  if (!isValidRegistry(registry) || typeof cardId !== 'string') return false;

  // hasOwnProperty checks if the specific ID exists in the registry
  return registry.hasOwnProperty(cardId);
}

export function removeRationCard(registry, cardId) {
  if (!isValidRegistry(registry) || typeof cardId !== 'string') return false;

  // Check if card exists before attempting to delete
  if (registry.hasOwnProperty(cardId)) {
    delete registry[cardId];
    return true;
  }

  return false;
}