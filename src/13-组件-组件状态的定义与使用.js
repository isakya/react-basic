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
/**
 * 总结：
 * 1. 编写组件其实就是编写原生js类 或 函数
 * 2. 定义状态必须通过 state 实例属性的方法提供一个对象，名称是固定的就叫做state
 * 3. 修改state中的任何属性都不可以通过直接赋值，必须走 setState 方法，这个方法来自于继承得到
 * 4. 这里的 this 关键词 很容易出现指向错误的问题，上面的写法是最推荐和最规范的 没有this指向的问题
 * 
 */


function App() {
  return (
    <div>
      <TestComponent />
    </div>
  )
}

export default App
