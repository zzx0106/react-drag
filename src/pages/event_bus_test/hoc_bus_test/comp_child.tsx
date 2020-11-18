import React, { ContextType } from 'react';
import { UseHocContext, useHocContext, EventBus } from 'src/event_bus/hoc_bus';
import { initialState, ActionTypes } from './bus/bus_data';

class CompChild extends React.Component {
  // static contextType = EventBus;
  // state = {};
  context!: UseHocContext<typeof initialState, ActionTypes>;
  componentDidMount() {
    console.log('bus comp', this.context);
  }
  render() {
    const { state, dispatch } = this.context;
    return (
      <div className="CompChild" onClick={() => dispatch({ type: 'ADD' })}>
        comp_child {state.timeReducer.count}
      </div>
    );
  }
}
CompChild.contextType = EventBus;
export default CompChild;
