import _ from 'lodash'
import { useSelector } from 'react-redux'
import React from 'react'

const TodoList = () => {
  const doneItems = _.get(
    useSelector((state) => state),
    'doneItems',
    []
  )

  return (
    <div id="todoList">
      <ul className="mt-2 px-0">
        {doneItems.map((item, i) => (
          <li key={item.id} className="list-li d-flex mx-3 mb-2 p-2">
            <p className="my-auto">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
