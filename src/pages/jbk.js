/* eslint-disable */
/** @jsx h */
// import h from 'vhtml';
let items = ['one', 'two', 'three'];
export default function (jbk) {
  // now render JSX to an HTML string!
  return (
    <div class='foo'>
      <h1>Hi!</h1>
      <p class='jbk'>
        {/* <div>1</div>
        <div>2</div>
        <div>3</div> */}
        Here is a list of {items.length} items: {jbk}
      </p>
      <ul>
        12321
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
// document.body.innerHTML = (
//   <div class='foo'>
//     <h1>Hi!</h1>
//     <p>Here is a list of {items.length} items:</p>
//     <ul>
//       {items.map((item) => (
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>
// );

function h(name, attrs, ...children) {
  /*
  // 函数式的组件(functional component)请根据需要转换
  if (typeof name === 'function') {
    return name(attrs);
  }
  */
  return {
    tag: name,
    attrs,
    children,
  };
}
