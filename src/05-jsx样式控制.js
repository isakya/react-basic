// jsx 样式控制
// 1. 行内样式 - 在元素身上绑定一个style属性即可

// 2. 类名样式 - 在元素身上绑定一个className属性即可
import './app.css'


// 抽离样式
const style = {
  color: 'red',
  fontSize: '30px'
}

function App() {
  return (
    <div className="App">
      <span style={{
        color: 'red',
        fontSize: '30px'
      }}>this is span</span>
      <br />
      <span style={style}>this is span</span>
      <span className="active">测试类名样式</span>
    </div>
  )
}

export default App
