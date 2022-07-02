
// 传递自定义参数

// 1. 只需要参数则 {clickHandler} => {() => clickHandler('自定义的参数'))
// 2. 即需要 e，也需要额外参数 {(e) => clickHandler(e, '自定义参数')}
function Hello() {
  const clickHandler = (e, msg) => {
    console.log('函数组件中的事件被触发了', e, msg)
  }
  return (
    <div onClick={(e) => clickHandler(e, 'this is msg')} href="http://www.baidu.com">点我</div>
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
