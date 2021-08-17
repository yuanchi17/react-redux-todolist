import _ from 'lodash'
import { DoneItem, DelItem } from '../actions/TodoList'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'

const TodoList = () => {
  const dispatch = useDispatch()
  const todoItems = _.get(
    useSelector((state) => state),
    'todoItems',
    []
  )

  return (
    <div id="todoList">
      <ul className="mt-2 px-0">
        {todoItems.map((item, i) => (
          <li key={item.id} className="list-li d-flex mx-3 mb-2 p-2">
            <p className="my-auto">{item.title}</p>
            <div className="my-auto ml-auto">
              <i
                type="button"
                className="fa fa-check-circle text-success my-auto mx-1"
                onClick={() => dispatch(DoneItem(i))}
              ></i>
              <i
                type="button"
                className="fa fa-trash text-danger my-auto mx-1"
                onClick={() => dispatch(DelItem(i))}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
