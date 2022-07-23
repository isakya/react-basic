import { useEffect, useState } from 'react'

// useEffect 清除副作用
function Test() {
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('定时器执行了')
    }, 1000)
    // 组件销毁的时候就会执行 return 的函数
    return () => {
      // 清理副作用
      clearInterval(timer)
    }
  }, [])
  return (
    <div>this is test</div>
  )
}


function App() {
  const [flag, setFlag] = useState(true)
  return (
    <div>
      {flag ? <Test /> : null}
      <button onClick={() => setFlag(!flag)}>switch</button>
    </div>
  )
}

export default App