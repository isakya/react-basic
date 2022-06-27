import './app.css'


// 动态控制 active 类名，满足条件才渲染active
const activeFlag = true
function App() {
  return (
    <div className="App">
      <span className={activeFlag ? 'active' : ''}>测试类名样式</span>
    </div>
  )
}

export default App
