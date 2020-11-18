import React, { useReducer } from 'react';

import HookChild from './hook_child';
import PurChild from './pur_child';
import CompChild from './comp_child';

import { reducer, initialState, Provider } from 'src/event_bus/simple_bus';

function Home(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('home', state);
  return (
    <Provider value={{ state, dispatch }}>
      simple bus ----------------------------- <br></br>
      root: {state.time}
      <HookChild></HookChild>
      <PurChild></PurChild>
      <CompChild></CompChild>
    </Provider>
  );
}
export default Home;
