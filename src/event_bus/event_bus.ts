export function init(initialState: object) {
  return { data: initialState };
}
export const initialState = {token:'jbk'};
export function reducer(state = initialState, action: { type: string }) {
  switch (action.type) {
    case 'ADD':
      return { ...state };
    default:
      throw new Error();
  }
}
