import React, { useContext } from 'react';
import { EventBus } from 'src/home';
export function HookChild() {
  const bus = useContext(EventBus);
  console.log(bus);
  return <div>hook_child</div>;
}
