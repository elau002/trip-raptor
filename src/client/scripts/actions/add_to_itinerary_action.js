export const ADD_TO_ITINERARY = 'ADD_TO_ITINERARY';

export function addToItinerary(payload) {
  return {
    type: ADD_TO_ITINERARY,
    payload,
  };
}
