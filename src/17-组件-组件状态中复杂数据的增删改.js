// 状态不可变说明

import React from 'react'

class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'jack',
      age: 20
    }
  }
  changeCount = () => {
    // this.setState({
    //   list: [...this.state.list, 4, 5], // 数组修改
    // })
    // // 对象修改
    // this.setState({
    //   person: {
    //     ...this.state.person,
    //     name: 'ls'
    //   }
    // })

    // 删除数组元素 - filter
    this.setState({
      list: this.state.list.filter(item => item !== 2)
    })
  }
  render() {
    return (
      <>
        <ul>
          {this.state.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div>{this.state.person.name}</div>
        <button onClick={this.changeCount}>{this.state.count} click</button>
      </>
    )
  }
}

function App() {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

export default App
