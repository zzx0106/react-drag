import React, { useState, useEffect, memo, useCallback, useMemo, Props } from 'react';
import { is, Map } from 'immutable';
import Draggable, { DragParams } from './components/draggble';
import './transfer.scss';
interface TestProps {
  name: Name;
  onClick?(event: Name): void;
}
function compare(prevProps: TestProps, nextProps: TestProps) {
  if (Object.keys(prevProps).length !== Object.keys(nextProps).length) {
    return true;
  }
  if (prevProps === nextProps || is(Map(prevProps.name), Map(nextProps.name))) {
    return true;
  }
  return false;
}
const TestComp = memo<TestProps>(({ name, onClick }: TestProps) => {
  console.log('rneder testcomp');
  return <div onClick={() => onClick && onClick({ jbk: 'woririri' })}>Child comp --- {name?.jbk}</div>;
}, compare);
interface Name {
  [key: string]: unknown;
  jbk: string;
}
interface State {
  order: number[];
  dragOrder: number[];
  draggedIndex: string | number | null;
}
export const Transfer = () => {
  // const [count, setCount] = useState(0);
  // const add = () => setCount(count + 1);
  // const [state, setState] = useState({ jbk: 'wocao' });
  // const changeName = useCallback((newName: Name) => {
  //   setState((old) => ({ ...old, ...newName }));
  // }, []);
  const HEIGHT = 80;
  const items = [0, 1, 2, 3, 4];
  const [state, setState] = useState<State>({
    order: items,
    dragOrder: items,
    draggedIndex: null,
  });
  const handleDrag = useCallback(
    ({ translation, id }: DragParams) => {
      console.log('handleDrag');
      const delta = Math.round(translation.y / HEIGHT);
      const index = state.order.indexOf(id as number);
      const dragOrder = state.order.filter((index) => index !== id);
      if (items.indexOf(index + delta) === -1) {
        return;
      }
      dragOrder.splice(index + delta, 0, id as number);
      setState((state) => ({
        ...state,
        draggedIndex: id,
        dragOrder,
      }));
    },
    [state.order, items.length]
  );
  const handleDragEnd = useCallback((id) => {
    setState((state) => ({
      ...state,
      order: state.dragOrder,
      draggedIndex: null,
    }));
  }, []);
  return (
    <div>
      {/* Transfer */}
      {/* <button onClick={add}>点击次数{count}</button> */}
      {/* <TestComp name={state} onClick={changeName}></TestComp> */}
      <div className="container">
        {items.map((index) => {
          const isDragging = state.draggedIndex === index;
          const top = state.dragOrder.indexOf(index) * (HEIGHT + 10);
          const draggedTop = state.order.indexOf(index) * (HEIGHT + 10);
          return (
            <Draggable key={index} id={index} onDrag={handleDrag} onDragEnd={handleDragEnd}>
              <div
                className={`rect ${isDragging ? 'notrans' : ''}`}
                style={{ top: `${isDragging ? draggedTop : top}px` }}>
                {index}
              </div>
            </Draggable>
          );
        })}
      </div>
    </div>
  );
};
export default Transfer;
