// props校验
// 支持类型：
// 1. js的所有数据类型
// 2. isRequired 必传

import React from 'react'
import PropTypes from 'prop-types'

function Test({ list }) {
  return (
    <div>
      {list.map(item => <p key={item}>{item}</p>)}
    </div>
  )
}

Test.propTypes = {
  list: PropTypes.array.isRequired // 限定为必传
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

