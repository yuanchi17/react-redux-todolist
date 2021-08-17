exports.DoneItem = (id) => ({
  type: 'TODOLIST_DONE',
  payload: { id },
})

exports.DelItem = (id) => ({
  type: 'TODOLIST_DEL',
  payload: { id },
})

exports.DelDoneItem = (id) => ({
  type: 'DONELIST_DEL',
  payload: { id },
})

exports.AddItem = (title) => ({
  type: 'TODOLIST_ADD',
  payload: { title },
})
