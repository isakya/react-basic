import { useState } from 'react'

function Counter(props) {
  // useState传入函数作为初始化参数
  const [count, setCount] = useState(() => {
    return props.count
  })
  return (
    <button onClick={() => setCount(count + 1)}>{count}</button>
  )

}


function App() {
  return (
    <div>
      <Counter count={10} />
      <Counter count={20} />
    </div>
  )
}

export default App