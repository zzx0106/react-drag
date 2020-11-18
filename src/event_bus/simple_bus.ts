import React, { Reducer } from 'react';
// export function init(initialState: State) {
//   return { data: initialState };
// }
type State = {
  time: number;
};
type Type = 'ADD';
// type CountAction = { type: 'ADD' };
type CountAction = { type?: Type };
type CountReducer = Reducer<State, CountAction>;
export const initialState: State = { time: 0 };
export function reducer(state: State, action: CountAction): State | never {
  switch (action.type) {
    case 'ADD':
      return { ...state, time: state.time + 1 };
    default:
      throw new Error();
  }
}
interface ContextProps {
  state: State;
  dispatch: ({ type }: CountAction) => void;
}
export const EventBus = React.createContext({} as ContextProps);
// export const EventBus: Context<{
//   state: State;
//   dispatch: Dispatch<CountAction>;
// }> = React.createContext({} as IContextProps);
export const { Provider, Consumer } = EventBus;
