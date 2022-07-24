import React, { createContext, useContext, useState } from 'react'

// 函数组件用 useContest 跨组件传递数据
const Context = createContext()

function ComA() {
  const count = useContext(Context)
  return (
    <div>

      this is ComA
      <br />
      app组件传过来的数据为： {count}
      <ComC />
    </div>
  )
}

function ComC() {
  const count = useContext(Context)

  return (
    <div>
      this is ComC
      <br />
      app组件传过来的数据为： {count}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(20)
  return (
    <Context.Provider value={count}>
      <div>
        <ComA />
        <button onClick={() => { setCount(count + 1) }}>加一</button>
      </div>
    </Context.Provider>
  )
}

export default App