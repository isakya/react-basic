// 通过依赖项控制副作用的执行时机
// 1. 默认状态（无依赖项）
// 组件初始化的时候执行一次 等到每次数据修改组件更新时再次执行
// 2. 添加一个空数组依赖项
// 组件初始化的时候执行一次
// 3. 依赖特定项，当特定项数据更新的时候 副作用也跟着执行

// 4. 注意事项
// 只要useEffect回调函数中用到的数据状态就应该出现在依赖项数组中声明 否则会有bug
import { useState, useEffect } from 'react'


function App() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('zs')
  useEffect(() => {
    // 定义副作用
    console.log('副作用又执行了')
    document.title = count
    console.log(name)
  }, [count, name])
  // 此时 初始化 或 count/name 被修改时都会执行副作用函数

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setName(name + 'lisi')}>{name}</button>
    </div>
  )
}

export default App