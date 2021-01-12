import { FC } from "react";
import { useDrag, useDrop } from "react-dnd";

type Item = {
  item: string
  index: number
  change: (drop_index: number, item_index: number) => void
}

const Types = {
    ITEM: "list_item"
};

export const ListItem: FC<Item> = ({item, index, change}) => {

  const [, drag] = useDrag({
    item: {type: Types.ITEM, index},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const [, drop] = useDrop({
    accept: Types.ITEM,
    drop: (item) => {
        console.log(`drop item: ${index}, drag item: ${item.index}`);
        var item_index = item.index;
        var drop_index = index;
        [drop_index, item_index] = [item_index, drop_index]
        console.log(`After return drop item: ${drop_index}, drag item: ${item_index}`)
        change(drop_index,item_index);
    },
  })

console.log(item[1]);
  return (
    <div ref={drag}>
      <li ref={drop} style={{ fontSize: '32px'}} >{item}</li>
    </div>
  );
}