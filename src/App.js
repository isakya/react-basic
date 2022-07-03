// 组件更新阶段生命周期
import React from 'react'

class App extends React.Component {
  // 更新阶段生命周期
  // 注意不要在这里调用setState
  componentDidUpdate() {
    console.log('componentDidUpdate 2')
  }
  handlerUpdate = () => {
    this.setState({
      a: this.state.a + 1
    })
  }
  state = {
    a: 1
  }
  render() {
    console.log('render 1')
    return (
      <>
        <button onClick={this.handlerUpdate}>{this.state.a}</button>
      </>
    )
  }
}

export default App