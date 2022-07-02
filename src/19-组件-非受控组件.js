// 非受控组件、通过dom来获取元素的值
// 1. 导入ref
import React, { createRef } from 'react'

class Counter extends React.Component {

  // 这个实例属性是可以自定义的
  msgRef = createRef()

  getValue = () => {
    // 2. 通过msgRef获取input value值
    console.log(this.msgRef.current.value)
  }
  render() {
    return (
      <>
        <input type="text" ref={this.msgRef} />
        <button onClick={this.getValue}>点击获取输入框的值</button>
      </>
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
