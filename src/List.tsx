import { ListItem } from './ListItem'

function List() {
    const list = ['1', '2', '3']
  return (
      <ul>
        {list.map((item, index) => (<ListItem key={index} index={index} item={item}/>))}
      </ul>
  )
}

export default List