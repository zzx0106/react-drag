import React, { Dispatch, ReducerAction, Context, Reducer, useReducer, useContext } from 'react';
// export function init(initialState: State) {
//   return { data: initialState };
// }
// type CountAction = { type: 'ADD'; payload?: object };
type CountAction<T> = { type: T; payload?: object };
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CountReducer = Reducer<{ [x: string]: any }, CountAction<string>>;
// export const EventBus: Context<any> = React.createContext('provider');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const EventBus = React.createContext({} as UseHocContext<any, any>);
// export const EventBus: Context<{ state: State; dispatch: Dispatch<CountAction>; }> = React.createContext({} as IContextProps);
export const { Provider, Consumer } = EventBus;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HocProvider = (reducer: CountReducer, initialState: { [x: string]: any }) => (Comp: React.FC) => {
  return () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    Comp.displayName = 'ojbk';
    return (
      <Provider value={{ state, dispatch }}>
        <Comp></Comp>
      </Provider>
    );
  };
};
/**
 *  获取自定义的redux
 *  @T 接收一个state的类型，是总体的state的类型
 *  @A 接收一个action的类型，是总体的action类型
 */
export interface UseHocContext<T, A> {
  dispatch: Dispatch<A>;
  state: T;
}
/**
 *  获取自定义的redux
 *  @state 这个参数是需要拿来使用的state
 *  @dispatch 这个参数是dispatch分发action使用的
 *  @T 接收一个state的类型，是总体的state的类型
 *  @A 接收一个action的类型，是总体的action类型
 */
export function useHocContext<T, A>() {
  return useContext<UseHocContext<T, A>>(EventBus);
}

/**接受一个包含多个reducer函数的对象，返回一个新的reducer函数
 * @param reducers 传入多个reducer,用于整合成一个reducer
 */
export function combineReducers<A>(reducers: { [x: string]: Function }) {
  //整合reducer函数的对象的函数
  return function (state = {}, action: A) {
    //返回一个整合之后的reducer函数 ,然后传给了createStore使用
    //依次调用所有的reduce函数，并得到了状态,然后得到了许多的状态,得到n个新的子状态，封装成对象并返回
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return Object.keys(reducers).reduce((newState: { [x: string]: any }, key: string) => {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newState[key] = reducers[key]((state as any)[key], action); //然后得到新的子状态，赋值给对应的key的新state里面
      } catch (error) {
        console.error('传入的state的key必须和每个reducer的key一致');
      }
      return newState;
    }, {});
  };
}
