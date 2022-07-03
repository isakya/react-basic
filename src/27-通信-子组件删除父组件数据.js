import React from 'react'

// 渲染列表
function ListItem({ item, delItem }) {
  return (
    <div>
      <div>
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <p>{item.info}</p>
        <button onClick={() => delItem(item.id)}>删除</button>
      </div>
    </div>
  )
}

// 数据提供者
class App extends React.Component {
  state = {
    list: [
      { id: 1, name: 'zs', price: 19.0, info: '促销' },
      { id: 2, name: 'zs', price: 19.0, info: '促销' },
      { id: 3, name: 'li', price: 19.0, info: '促销' }
    ]
  }
  delItem = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  render() {
    return (
      <>
        {this.state.list.map(item => <ListItem delItem={this.delItem} key={item.id} item={item} />)}
      </>
    )
  }
}

export default App
