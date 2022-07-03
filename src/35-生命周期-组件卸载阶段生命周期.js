// 组件卸载阶段生命周期
import React from 'react'

class Test extends React.Component {
  componentWillUnmount() {
    console.log('componentWillUnmount')
    // 常用来清理定时器
  }
  render() {
    return <div>test</div>
  }
}

class App extends React.Component {
  state = {
    flag: true
  }
  handlerToggle = () => {
    this.setState({
      flag: !this.state.flag
    })
  }
  render() {
    return (
      <>
        {this.state.flag ? <Test /> : null}
        <button onClick={this.handlerToggle}>切换</button>
      </>
    )
  }
}

export default App