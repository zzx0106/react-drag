import React, { useContext, useState } from 'react';
import { initialState, ActionTypes } from './bus/bus_data';
import { useHocContext } from 'src/event_bus/hoc_bus';
function HookChild() {
  // const { state, dispatch } = useContext(EventBus);
  const { state, dispatch } = useHocContext<typeof initialState, ActionTypes>();
  console.log('state', state);
  return <div onClick={() => dispatch({ type: 'ADD' })}>hook_child {state.timeReducer.count}</div>;
}
export default HookChild;
