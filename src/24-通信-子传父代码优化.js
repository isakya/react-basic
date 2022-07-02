// 子传父
import React from 'react'
// Son
// 父传子 props
// 子传父：子组件调用父组件传递过来的函数，并把想要传递的数据当成函数的实参即可
function Son({ getSonMesg }) {
  function clickHandler() {
    getSonMesg('this is son message!')
  }
  return (
    <>
      <div>this is son</div>
      <button onClick={clickHandler}>点击</button>
    </>
  )
}


class App extends React.Component {
  // 父组件准备数据
  state = {
    list: [1, 2, 3],
  }
  // 1. 准备一个函数传递给子组件
  getSonMesg = (msg) => {
    console.log(msg)
  }

  render() {
    return (
      <div>
        <Son getSonMesg={this.getSonMesg}></Son>
      </div >
    )
  }
}

export default App
