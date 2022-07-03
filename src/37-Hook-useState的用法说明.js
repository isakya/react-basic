// 组件的更新过程
// 当调用setCount的时候 更新过程

// 首次渲染
// 首次渲染的时候 组件内部的代码会被执行一次
// 其中useState也会跟着执行 这里重点注意 初始值只在首次渲染时生效


// 更新渲染 setCount 都会更新
// 1. app组件会再次渲染 这个函数会再次执行
// 2. useState再次执行 得到的新的count值不是0而是修改之后的1 模板会用新值渲染 


import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App