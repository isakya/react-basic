// 用 useRef 获取 dom对象

// 组件实例 指的是 类组件
// dom对象 指的是 标签

import React, { useEffect, useRef } from 'react'

class TestC extends React.Component {
  state = {
    name: 'test name'
  }
  getName = () => {
    return 'this is test name'
  }
  render() {
    return (
      <div>类组件</div>
    )
  }
}



function App() {
  // 获取dom对象
  const testRef = useRef(null)
  const h1Ref = useRef(null)

  useEffect(() => {
    console.log(testRef.current)
    console.log(h1Ref.current)
  }, [])
  return (
    <div>
      <TestC ref={testRef} />
      <h1 ref={h1Ref}>this is h1</h1>
    </div>
  )
}

export default App