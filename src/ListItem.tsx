import { FC } from "react";
import { useDrag, useDrop } from "react-dnd";

type Item = {
  item: string
  index: number
}

const Types = {
    ITEM: "list_item"
};

export const ListItem: FC<Item> = ({item, index}) => {

  const [{isDragging}, drag] = useDrag({
    item: {type: Types.ITEM, index},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const [{isOver}, drop] = useDrop({
    accept: Types.ITEM,
    hover: (item,monitor) => {
      monitor.isOver()
    },
    drop: (item) => {
        console.log(`drop item: ${index}, drag item: ${JSON.stringify(item)}`)
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  if (isDragging) {
    console.log(`drag: ${JSON.stringify(item)}`)
  }

  if (isOver) {
    console.log(`drop place: ${JSON.stringify(item)}`)
  }

  return (
    <div ref={drag}>
      <li ref={drop} style={{ fontSize: '32px'}}>{item}</li>
    </div>
  )
}