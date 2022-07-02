import React from 'react'
// this 有问题的写法


class Test extends React.Component {


  handler() {
    console.log(this)
  }

  render() {
    // render 函数中的 this 已经被 react 内部做了修正
    // 这里的this就是指向当前的组件实例对象
    // 所以箭头函数中的 this 直接沿用
    console.log('render this指向为：', this)
    return (
      // 如果不通过 constructor 做修正，直接可以在事件绑定的位置，通过箭头函数的写法，直接沿用父组件中的 this 指向
      <button onClick={() => this.handler}>button</button>
    )
  }
}


function App() {
  return (
    <div>
      <Test></Test>
    </div>
  )
}

export default App
