// 通过类组件修改状态的方式 counter

import React from 'react'

class Counter extends React.Component {
  // 通过state定义组件状态
  state = {
    count: 0
  }
  // 事件回调函数
  changeCount = () => {
    // 修改state
    // react这个体系下 '数据变化' 
    // value 永远是上一次 count 值 + 1
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    return (
      <button onClick={this.changeCount}>{this.state.count} click</button>
    )
  }
}

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

export default App
