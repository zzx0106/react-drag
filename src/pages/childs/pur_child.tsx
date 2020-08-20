import React from 'react';
import { EventBus } from 'src/home';

export function PurChild() {
  return (
    <div>
      <EventBus.Consumer>
        {(bus) => {
          console.log('bus pur_child', bus);
          return <div>pur_child</div>;
        }}
      </EventBus.Consumer>
    </div>
  );
}
