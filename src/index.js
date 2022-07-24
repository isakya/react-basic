// React: 框架的核心包
// ReactDOM：专门做渲染相关的包
import React from 'react'
import ReactDOM from 'react-dom/client'
// 应用的全局样式文件
import './index.css'
// 引入根组件
import App from './App'


// Context跨组件传递数据补充：
// 1. context如果要传递的数据 是静态的，只需要在整个应用初始化的时候传递一次就可以，就可以选择在这个文件下做数据提供

// 2. 如果context需要传递数据并且将来还需要在对数据作出修改时，底层组件也需要跟着一起变，就写到原本的文件里边

import Context from './context'


// 渲染根组件APP 到一个 id 为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Context.Provider value={100}>
    <App />
  </Context.Provider>
)

