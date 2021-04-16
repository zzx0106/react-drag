import React from 'react';
import RouterRoot from './routers';
import JBK from './pages/jbk';
// import HomePage from './pages/Home';
// import HocBusTest from './pages/hoc_bus_test/event_bus_test';
// import SimpleBusTest from './pages/simple_bus_test/event_bus_test';

// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
function Home() {
  console.log('JBK', JBK(1232131));
  return (
    <div>
      root---
      <div dangerouslySetInnerHTML={{ __html: JBK(1232131) as unknown as string }}></div>
      <RouterRoot></RouterRoot>
    </div>
  );
}
export default Home;
