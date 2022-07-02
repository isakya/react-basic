import React from 'react'
// this 有问题的写法


class Test extends React.Component {
  constructor() {
    super()
    // 使用bind强行修正 this 指向
    // 相当于在类组件初始化阶段 就可以把回调函数的this修正到永远指向当前组件实例的对象
    this.handler = this.handler.bind(this)
  }

  handler() {
    console.log(this)
  }

  render() {
    return (
      <button onClick={this.handler}>button</button>
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
