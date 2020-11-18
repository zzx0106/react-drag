import { throttle } from '@/utils/tools';
import React, { useState, useEffect, useCallback, useMemo, CSSProperties } from 'react';

const POSITION = { x: 0, y: 0 };
export interface DragParams {
  translation: { x: number; y: number };
  id: string | number;
}
interface Draggble {
  children?: JSX.Element;
  id: string | number;
  onDrag(params: DragParams): void;
  onDragEnd(id: any): void;
}
const Draggble = ({ children, id, onDrag, onDragEnd }: Draggble) => {
  const [state, setState] = useState({
    isDragging: false,
    origin: POSITION,
    translation: POSITION,
  });
  const handleMouseDown = useCallback(({ clientX, clientY }) => {
    setState((state) => ({
      ...state,
      isDragging: true,
      origin: { x: clientX, y: clientY },
    }));
  }, []);
  const tDrag = throttle(onDrag, 16); // 60帧
  const handleMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      // throttle(() => {
      const translation = { x: clientX - state.origin.x, y: clientY - state.origin.y };
      setState((state) => ({
        ...state,
        translation,
      }));
      tDrag({ translation, id });
      // }, 2000)();
    },
    [state.origin, onDrag, id]
  );
  const handleMouseUp = useCallback(() => {
    setState((state) => ({
      ...state,
      isDragging: false,
    }));
    onDragEnd(id);
  }, [onDragEnd]);
  useEffect(() => {
    if (state.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      setState((state) => ({ ...state, translation: { x: 0, y: 0 } }));
    }
  }, [state.isDragging, handleMouseUp, handleMouseMove]);
  const style = useMemo<CSSProperties>(
    () => ({
      cursor: state.isDragging ? '-webkit-grabbing' : '-webkit-grab',
      transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
      transition: state.isDragging ? 'none' : 'transform 500ms',
      zIndex: state.isDragging ? 2 : 1,
      position: state.isDragging ? 'absolute' : 'relative',
    }),
    [state.isDragging, state.translation]
  );
  return (
    <div style={style} onMouseDown={handleMouseDown}>
      {children}
    </div>
  );
};
export default Draggble;
