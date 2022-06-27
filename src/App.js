import React from "react"

// 事件绑定（函数组件）
function Hello() {
  const clickHandler = () => {
    console.log('函数组件中的事件被触发了')
  }
  return <h1 onClick={clickHandler}>Hello</h1>
}

// 事件绑定（类组件）
class HelloComponent extends React.Component {
  // 事件回调（标准写法）
  clickHandler = () => {
    console.log('类组件中的事件被触发了')
  }
  render() {
    return <div onClick={this.clickHandler}>this is class Component</div>
  }
}


function App() {
  return (
    <>
      <div>
        {/* 渲染 */}
        <Hello />
        <Hello></Hello>

        <HelloComponent></HelloComponent>
      </div>
    </>
  )
}

export default App
