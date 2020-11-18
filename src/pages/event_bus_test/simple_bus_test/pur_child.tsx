import React from 'react';
import { Consumer } from 'src/event_bus/simple_bus';

function PurChild() {
  return (
    <div>
      <Consumer>
        {({ state, dispatch }) => {
          return <div onClick={() => dispatch({ type: 'ADD' })}>pur_child {state.time}</div>;
        }}
      </Consumer>
    </div>
  );
}
export default PurChild;
