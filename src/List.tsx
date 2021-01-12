import { ListItem } from './ListItem'

function List() {
    const list = ['a', 'b', 'c']
    const change = (drop_index: number, item_index: number) => {
      console.log(`入れ替え前 drop: ${list[drop_index]}  drag: ${list[item_index]}`);
      if (drop_index !== item_index){
        [list[drop_index], list[item_index]] = [list[item_index], list[drop_index]];
        console.log(`入れ替え後 drop: ${list[drop_index]}  drag: ${list[item_index]}`);
      }
    }
  return (
      <ul>
        {list.map((item, index) => (<ListItem key={index} index={index} item={item} change={change}/>))}
        {list[1]}
      </ul>
  );
}

export default List