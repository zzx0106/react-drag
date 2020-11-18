import React from 'react';
import { Consumer, UseHocContext } from 'src/event_bus/hoc_bus';
import { initialState, ActionTypes } from './bus/bus_data';

function PurChild() {
  return (
    <div>
      <Consumer>
        {({ state, dispatch }: UseHocContext<typeof initialState, ActionTypes>) => {
          return <div onClick={() => dispatch({ type: 'ADD' })}>pur_child {state.timeReducer.count}</div>;
        }}
      </Consumer>
    </div>
  );
}
export default PurChild;
