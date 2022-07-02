// 父传子
import React from 'react'

// 函数式的Son
function SonF(props) {
  // props 是一个对象 里面存着通过父组件传入的所有数据
  return (
    <div>我是函数子组件,{props.msg}</div>
  )
}


// 类组件的Son
class SonC extends React.Component {
  render() {
    return (
      // 类组件必须通过 this 关键词获取props数据，这里的props是固定的
      <div>我是类子组件,{this.props.msg}</div>
    )
  }
}

class App extends React.Component {
  // 父组件准备数据
  state = {
    message: 'this is message'
  }
  render() {
    return (
      <div>
        <SonF msg={this.state.message}></SonF>
        <SonC msg={this.state.message}></SonC>
      </div >
    )
  }
}

export default App
