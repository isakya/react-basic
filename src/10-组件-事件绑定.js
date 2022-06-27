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
  // 事件回调（标准写法 避免this指向问题）
  // 这样写 回调函数中的this指向的是当前的组件实例对象
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
