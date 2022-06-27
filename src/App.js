
// 事件对象e
function Hello() {
  const clickHandler = (e) => {
    // 阻止默认行为
    e.preventDefault()
    console.log('函数组件中的事件被触发了', e)
  }
  return (
    <div>
      <a onClick={clickHandler} href="http://www.baidu.com">百度</a>
    </div>
  )
}

function App() {
  return (
    <>
      <div>
        {/* 渲染 */}
        <Hello />
        <Hello></Hello>
      </div>
    </>
  )
}

export default App
