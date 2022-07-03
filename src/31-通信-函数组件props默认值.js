// props校验
// 设置默认值：
// 1. 函数组件默认值使用defaultProps
// 2. 在参数中直接设置默认值（推荐）
// 区别：
// 第一种在用的时候就已经有了pageSize这个prop
// 第二种只有在传递的时候组件内部才有prop
import React from 'react'
import PropTypes from 'prop-types'

// 第二种
function Test({ list, pageSize = 10 }) {
  return (
    <div>
      {list.map(item => <p key={item}>{item}</p>)}
      {pageSize}
    </div>
  )
}

Test.propTypes = {
  list: PropTypes.array.isRequired // 限定为必传
}

// 第一种
// Test.defaultProps = {
//   pageSize: 10 // 默认值为10
// }

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