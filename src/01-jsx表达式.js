// 1. 识别常规的变量
const name = 'zs'
// 2. 原生js方法调用
const getAge = () => {
  return 18
}
// 3. 三元运算符(常用)
const flag = true



function App() {
  return (
    <div className="App">
      {name}
      {getAge()}
      {flag ? 'good' : 'bad'}
    </div>
  )
}

export default App
