import { AddItem } from '../actions/TodoList'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'

const From = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')

  return (
    <form className="input-group px-3" onSubmit={() => dispatch(AddItem(title))}>
      <input
        type="text"
        className="form-control"
        placeholder="請輸入代辦事項"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      ></input>
      <div className="input-group-prepend">
        <button
          type="button"
          className="btn btn-outline-primary btn-add"
          onClick={() => dispatch(AddItem(title))}
        >
          新增
        </button>
      </div>
    </form>
  )
}

export default From
