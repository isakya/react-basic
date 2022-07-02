// 通过共同父组件在兄弟组件间传值

// 目标：B组件中的数据 传给 A 组件
// 1. 先把B中的数据通过子传父 传给App
// 2. 再把App接收到的Son中的数据 通过父传子 传给A
import React from 'react'

function SonA(props) {
  return (
    <div>
      this is sonA
      <p>{props.sendAMsg}</p>
    </div>
  )
}

function SonB(props) {
  const bMsg = '这是来自B组件的数据'
  return (
    <>
      <div>this is sonB</div>
      <button onClick={() => props.getBMsg(bMsg)}>B组件按钮</button>
    </>
  )
}


class App extends React.Component {
  state = {
    sendAMsg: ''
  }
  // 声明一个传给B组件的方法
  getBMsg = (msg) => {
    // 把msg数据交给sendAMsg
    this.setState({
      sendAMsg: msg
    })
  }
  render() {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg}></SonA>
        <SonB getBMsg={this.getBMsg}></SonB>
      </div >
    )
  }
}

export default App
