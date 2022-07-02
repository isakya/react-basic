// 父传子
import React from 'react'

// 函数式的Son
function Son(props) {
  // props 是一个对象 里面存着通过父组件传入的所有数据
  return (

    <>
      <div>我是函数子组件<br />数组数据：{props.list.map(item => <p key={item}>{item}</p>)}</div>
      <div>对象数据：{props.userInfo.name}</div>
      <button onClick={props.getMsg}>触发父组件中的函数</button>
      <p>{props.child}</p>

    </>
  )
}

class App extends React.Component {
  // 父组件准备数据
  state = {
    list: [1, 2, 3],
    userInfo: {
      name: 'ap',
      age: 30
    },
  }
  getMsg = () => {
    console.log('我是函数')
  }
  render() {
    return (
      <div>
        <Son list={this.state.list} userInfo={this.state.userInfo} getMsg={this.getMsg} child={<span>this is child</span>}></Son>
      </div >
    )
  }
}

export default App
