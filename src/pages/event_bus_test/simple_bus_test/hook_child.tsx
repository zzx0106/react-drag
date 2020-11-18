import React, { useContext } from 'react';
import { EventBus } from 'src/event_bus/simple_bus';
function HookChild() {
  const { state, dispatch } = useContext(EventBus);
  console.log('state', state);
  return <div onClick={() => dispatch({ type: 'ADD' })}>hook_child {state.time}</div>;
}
export default HookChild;
