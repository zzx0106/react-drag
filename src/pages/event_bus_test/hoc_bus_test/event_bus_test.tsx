import React from 'react';

import HookChild from './hook_child';
import PurChild from './pur_child';
import CompChild from './comp_child';

import { HocProvider, useHocContext, Consumer } from 'src/event_bus/hoc_bus';
import { reducer, initialState, ActionTypes } from './bus/bus_data';

function Home(): JSX.Element {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const { state } = useHocContext<typeof initialState, ActionTypes>();
  console.log('home', state);
  return (
    <>
      hoc bus --------------------------------<br></br>
      root: {state.timeReducer.count}
      <Consumer>{({ state: _ }) => <div> root: {_.timeReducer.count}</div>}</Consumer>
      <HookChild></HookChild>
      <PurChild></PurChild>
      <CompChild></CompChild>
    </>
  );
}
export default HocProvider(reducer, initialState)(Home);
