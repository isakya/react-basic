// props校验
import React from 'react'
// 里面有各种各样的内置的校验规则
import PropTypes from 'prop-types'

function Test({ list }) {
  return (
    <div>
      {list.map(item => <p key={item}>{item}</p>)}
    </div>
  )
}

Test.propTypes = {
  // 定义各种规则
  list: PropTypes.array // 限定为数组类型
}

class App extends React.Component {
  state = {
    list: [1, 2]
  }
  render() {
    return (
      <>
        <Test list={this.state.list}></Test>
      </>
    )
  }
}

export default App
