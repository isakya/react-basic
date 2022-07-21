// 导入hook
import { useWindowScroll } from './hooks/useWindowScroll'


function App() {

  // 使用hook
  const [y] = useWindowScroll()

  return (
    <div style={{ height: '12000px' }}>
      {y}
    </div>
  )
}

export default App