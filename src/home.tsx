import React, { useReducer } from 'react';
import { reducer, initialState } from './event_bus/event_bus';
import { HookChild } from './pages/childs/hook_child';
import { PurChild } from './pages/childs/pur_child';
import CompChild from './pages/childs/comp_child';

export const EventBus = React.createContext({});
export function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <EventBus.Provider value={{ state, dispatch }}>
      <HookChild></HookChild>
      <PurChild></PurChild>
      <CompChild></CompChild>
    </EventBus.Provider>
  );
}
