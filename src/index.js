// React: 框架的核心包
// ReactDOM：专门做渲染相关的包
import React from 'react'
import ReactDOM from 'react-dom/client'
// 应用的全局样式文件
import './index.css'
// 引入根组件
import App from './App'

// 渲染根组件APP 到一个 id 为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // 严格模式节点需要去掉
  // useEffect的执行事件
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)

