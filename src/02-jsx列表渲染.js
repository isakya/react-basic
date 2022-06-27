// React如何完成列表渲染
// 技术方案：map 重复渲染的是哪个模板 就 return 谁
// 注意事项：跟 vue 一样也需要加上 key 属性，为了提高diff性能
// key仅仅在内部使用，不会出现在真实的dom结构中

const songs = [
  { id: 1, name: 'dddd' },
  { id: 2, name: 'dddd' },
  { id: 3, name: 'dddd' },
]



function App() {
  return (
    <div className="App">
      <ul>
        {songs.map(song => <li key={song.id}>{song.name}</li>)}
      </ul>
    </div>
  )
}

export default App
