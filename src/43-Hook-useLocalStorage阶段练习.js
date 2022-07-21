import { useLocalStorage } from './hooks/useLocalStorage'

function App() {

  const [message, setMessage] = useLocalStorage('hook-key', 'izumi')
  setTimeout(() => {
    setMessage('sakai')
  }, 5000)
  return (
    <div>
      {message}
    </div>
  )
}

export default App