
// useState 
// 状态的读取和修改

// const [count, setCount] = useState(0)
// 1. useState传过来的参数 作为count的初始值
// 2. useState返回值是一个数组
// 3. 名字可以自定义
// 4. 顺序不可以调换，第一个是状态，第二个是修改状态的方法
// 5. setCount 函数 作用用来修改count 依旧保持不能直接修改原值
// 6. setCount(基于原值计算得到新值)
// 7. count和setCount 是一对


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