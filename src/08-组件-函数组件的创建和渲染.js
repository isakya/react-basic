// 函数组件的创建和渲染
// 创建

// 组件首字母必须大写
function Hello() {
  return <h1>hello</h1>
}

// 渲染 <Hello /> 或者 <Hello></Hello>


function App() {
  return (
    <>
      <div>
        {/* 渲染 */}
        <Hello></Hello>
        <Hello />
      </div>
    </>
  )
}

export default App
