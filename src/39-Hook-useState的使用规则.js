// useState的使用规则

import { useState } from 'react'



function App() {
  // 1. useState可以执行多次
  // 2. 只能在函数组件最外层调用
  // 3. 不能嵌套在if等条件语句里执行
  const [count, setCount] = useState(0)
  const [flag, setFlag] = useState(true)
  const [list, setList] = useState([])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default App