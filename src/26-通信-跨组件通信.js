// 跨组件通信

// App -> A -> ... -> C
// App的数据 -> C使用A的数据
// 注意： 
// 1. 上层组件和下层组件关系是相对的，只要存在就可以使用，通常我们都会通过app作为数据的提供方
// 2. 这里设涉及到的语法都是固定的，有两处，提供的位置 value提供数据 获取的位置{value => 使用value}

// 1. 导入createContext方法并执行,结构提供者和消费者
import React, { createContext } from 'react'

const { Provider, Consumer } = createContext()
function ComA() {
  return (
    <div>
      this is Component A
      <ComC></ComC>
    </div>
  )
}

function ComC() {
  // 3. 通过Comsumer使用数据
  return (
    <div>
      this is Component C
      <hr />
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}

class App extends React.Component {
  state = {
    message: 'this is message!'
  }
  render() {
    return (
      // 2. 使用provider包裹 根 组件
      <Provider value={this.state.message}>
        <div>
          <ComA></ComA>
        </div>
      </Provider>
    )
  }
}

export default App
