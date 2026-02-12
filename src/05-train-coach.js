/**
 * 🚂 Train Coach Finder - Implementation
 */

export function findPassenger(passengers, name) {
  // Validation: Must be array and name must be a string
  if (!Array.isArray(passengers) || typeof name !== 'string') return undefined;

  // .find() returns the first object that matches the condition
  return passengers.find(p => p.name.toLowerCase() === name.toLowerCase());
}

export function getPassengerIndex(passengers, name) {
  if (!Array.isArray(passengers) || typeof name !== 'string') return -1;

  // .findIndex() returns the position (0-based index) or -1 if not found
  return passengers.findIndex(p => p.name.toLowerCase() === name.toLowerCase());
}

export function isAnyWaitlisted(passengers) {
  // If not array or empty, return false
  if (!Array.isArray(passengers) || passengers.length === 0) return false;

  // .some() returns true if AT LEAST ONE element meets the condition
  return passengers.some(p => p.status === "waitlisted");
}

export function areAllConfirmed(passengers) {
  // If not array or empty, return false
  if (!Array.isArray(passengers) || passengers.length === 0) return false;

  // .every() returns true only if ALL elements meet the condition
  return passengers.every(p => p.status === "confirmed");
}

export function getWaitlistedPassengers(passengers) {
  if (!Array.isArray(passengers)) return [];

  // .filter() returns a NEW array containing all elements that match
  return passengers.filter(p => p.status === "waitlisted");
}