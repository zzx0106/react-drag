import React, { ContextType } from 'react';
import { EventBus } from 'src/event_bus/simple_bus';

class CompChild extends React.Component {
  // static contextType = EventBus;
  // state = {};
  context!: ContextType<typeof EventBus>;
  componentDidMount() {
    console.log('bus comp', this.context);
  }
  render() {
    const { state, dispatch } = this.context;
    return (
      <div className="CompChild" onClick={() => dispatch({ type: 'ADD' })}>
        comp_child {state.time}
      </div>
    );
  }
}
CompChild.contextType = EventBus;
export default CompChild;
