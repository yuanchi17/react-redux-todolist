import _ from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { DelDoneItem } from '../actions/TodoList'
import React from 'react'

const TodoList = () => {
  const dispatch = useDispatch()
  const doneItems = _.get(
    useSelector((state) => state),
    'doneItems',
    []
  )

  return (
    <div id="todoList">
      <ul className="px-0">
        {
          doneItems.map((item, i) => (
            <li key={item.id} className="list-li d-flex mx-3 mb-2 p-2">
              <p className="my-auto">{item.title}</p>
              <i
                type="button"
                className="fa fa-trash text-danger my-auto ml-auto"
                onClick={() => dispatch(DelDoneItem(i))}
              ></i>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
