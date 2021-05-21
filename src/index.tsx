import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import App from './App';

// 装饰普通方法 target 是类的prototype
// 静态方法 target对应的是类的构造函数
function getNameDecorator(target: object, key: string, descriptor: PropertyDescriptor) {
  // descriptor相当于definedProperty的第三个参数
  // descriptor （必须有 官方说的我理解不了，我理解的是 属性描述
  // 1、简单点就是 设置属性的值value，
  // 2、是否可操作属性值 writable，
  // 3、是否可修改配置configurable如果值为false descriptor内的属性都不可操作）
  // 4、是否可枚举enumerable
  console.log(target, key, descriptor.value);
  const fn: Function = descriptor.value;
  descriptor.value = function () {
    // eslint-disable-next-line prefer-rest-params
    const data = fn.apply(this, arguments);
    console.log('劫持的参数', data);
    return data + 2131;
  };
}
class Test {
  public jbk!: string;
  constructor(public name: string) {}
  @getNameDecorator
  getName() {
    console.log('this', this);
    return 1234;
  }
}
console.log('zxxxx', new Test('zzx'));
ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
