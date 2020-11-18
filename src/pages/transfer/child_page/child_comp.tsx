import React from 'react';

export class ChildCmp extends React.Component {
  componentDidMount() {
    console.log('ChildCmp');
  }
  render() {
    return <div className="ChildCmp">ChildCmp</div>;
  }
}
