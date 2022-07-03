// 组件生命周期挂载阶段执行顺序
// 注意：只有类组件才有生命周期，函数没有
import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    console.log('constructor 1')
  }
  componentDidMount() {
    console.log('componentDidMount 3')
    // 发送 ajax 请求
  }
  render() {
    console.log('render 2')
    return (
      <>

      </>
    )
  }
}

export default App