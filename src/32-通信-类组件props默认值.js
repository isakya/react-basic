// props校验
// 类组件prop默认值:
// 1. defaultProps
// 2. static类静态属性 (推荐)
import React from 'react'

class Test extends React.Component {
  // 第二种
  static defaultProps = {
    pageSize: 10
  }
  render() {
    return (
      <div>{this.props.pageSize}</div>
    )
  }
}


// 第一种
// Test.defaultProps = {
//   pageSize: 10 // 默认值为10
// }

class App extends React.Component {
  state = {

  }
  render() {
    return (
      <>
        <Test></Test>
      </>
    )
  }
}

export default App