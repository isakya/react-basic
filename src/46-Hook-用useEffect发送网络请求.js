/**
 * 发送网络请求：
 * 1、类组件：生命周期钩子函数 componentDidMount
 * 执行时机：在初始化的时候dom渲染完毕时只执行一次
 * 
 * 2、useEffect：三种执行时机
 *  1. 不加依赖项 - 初始化 / 重新渲染 时执行
 *  2. 加 [] - 初始化执行一次
 *  3. 加特定的依赖项 [count, name] - 首次执行 / 任意一个变化就执行
 */

import { useEffect } from 'react'


function App() {
  useEffect(() => {
    // 发送网络请求
    async function loadData() {
      const res = await fetch('https://www.fastmock.site/mock/b09b110c04e039773df12c4cc0e50817/api/leave/list')
      console.log(res)
    }
    loadData()
  }, [])
  return (
    <div>

    </div>
  )
}

export default App