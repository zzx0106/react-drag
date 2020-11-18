import { combineReducers } from '@/event_bus/hoc_bus';
const timeState = {
  count: 0,
};
const dataState = {
  user: {},
};

type CountAction<T> = { type: T | string; payload?: object };
type TimeActType = 'ADD';
export type ActionTypes = CountAction<TimeActType> | CountAction<DataActType>;

export const initialState = { timeReducer: timeState, dataReducer: dataState };

type StateType = typeof initialState;
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
function timeReducer(state = timeState, action: CountAction<TimeActType>) {
  console.log('state--->', state, action);
  switch (action.type) {
    case 'ADD':
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

type DataActType = 'LOGIN' /** LOGIN 登录 */;
// function dataReducer(state: Pick<StateType, 'dataState'> = { dataState }, action: CountAction<DataActType>) {
function dataReducer(state = dataState, action: CountAction<DataActType>) {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
export const reducer = combineReducers<ActionTypes>({ timeReducer, dataReducer });
console.log('这是个什么东西', reducer);
