import React from 'react';
import HocBusTest from '@/pages/event_bus_test/hoc_bus_test/event_bus_test';
import SimpleBusTest from '@/pages/event_bus_test/simple_bus_test/event_bus_test';
const EventBusPage = () => {
  return (
    <div>
      <HocBusTest></HocBusTest>
      <SimpleBusTest></SimpleBusTest>
    </div>
  );
};
export default EventBusPage;
