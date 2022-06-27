import React from 'react'
// 类组件的创建和渲染


// 创建
class HelloComponent extends React.Component {
  render() {
    return <div>this is class Component</div>
  }
}


// 渲染 <HelloComponent /> 或者 <HelloComponent></HelloComponent>



function App() {
  return (
    <>
      <div>
        {/* 渲染 */}
        <HelloComponent />
        <HelloComponent></HelloComponent>
      </div>
    </>
  )
}

export default App
