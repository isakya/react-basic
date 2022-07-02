// 组件状态 （类组件）
import React from 'react'
class TestComponent extends React.Component {
  // 1. 定义组件状态
  state = {
    // 在这里被定义的各种属性，全都是当前组件的状态
    name: 'cp teacher'
  }
  // 事件回调函数
  changeName = () => {
    // 3. 修改state中的name
    // 注意：不可以直接做赋值修改 必须通过一个方法 setState
    this.setState({
      name: 'zs'
    })
  }
  render() {
    // 2. 使用状态
    return (
      <div>
        this is TestComponent
        当前name为: {this.state.name}
        <button onClick={this.changeName}>修改name</button>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <TestComponent />
    </div>
  )
}

export default App
