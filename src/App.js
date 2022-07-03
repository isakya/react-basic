// 特殊的children属性
// 只要写在组件标签的内部，都会出现在组件props里的children属性当中
// 标签里可以是：
// 1. 普通文本
// 2. 普通标签
// 3. 函数
// 4. jsx

import React from 'react'

// 渲染列表
function ListItem({ children }) {
  return (
    <div>
      listItem,
      {children}
    </div>
  )
}

// 数据提供者
class App extends React.Component {


  render() {
    return (
      <>
        <ListItem>
          this is child
          <div>this is thild</div>
          <p>this is p</p>
        </ListItem>
      </>
    )
  }
}

export default App
