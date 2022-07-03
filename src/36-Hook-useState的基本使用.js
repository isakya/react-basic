// useState 
// 1. 导入useState函数 （react）
// 2. 执行这个函数并传入初始值，必须在函数组件中
// 3. [数据，修改数据的方法]
// 4. 使用数据 修改数据

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