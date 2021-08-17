import _ from 'lodash'

const initState = {
  todoItems: [
    { id: 1, title: '代辦事項 1' },
  ],
  doneItems: [
    { id: 2, title: '已完成清單' },
  ],
}

const todoList = (state = initState, action) => {
  switch (action.type) {
    case 'TODOLIST_DONE': {
      const selectId = action.payload.id
      return {
        ...state,
        todoItems: state.todoItems.filter((item, i) => i !== selectId),
        doneItems: [...state.doneItems, state.todoItems[selectId]],
      }
    }
    case 'TODOLIST_DEL': {
      const selectId = action.payload.id
      return {
        ...state,
        todoItems: state.todoItems.filter((item, i) => i !== selectId),
      }
    }
    case 'DONELIST_DEL': {
      const selectId = action.payload.id
      return {
        ...state,
        doneItems: state.doneItems.filter((item, i) => i !== selectId),
      }
    }
    case 'TODOLIST_ADD': {
      const title = action.payload.title
      const maxId = _.get(
        _.maxBy([...state.todoItems, ...state.doneItems], 'id'),
        'id',
        0
      )
      return {
        ...state,
        todoItems: [...state.todoItems, { id: maxId + 1, title }],
      }
    }
    default:
      return state
  }
}

export default todoList
