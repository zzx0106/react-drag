import React from 'react';
import { EventBus } from 'src/home';

class CompChild extends React.Component {
  // static contextType = EventBus;
  state = {};
  componentDidMount() {}
  render() {
    return <div className="CompChild">comp_child</div>;
  }
}
CompChild.contextType = EventBus;
export default CompChild;
