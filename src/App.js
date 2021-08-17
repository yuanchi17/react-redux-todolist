import './styles.css'
import { Switch, Route, Link } from 'react-router-dom'
import AddForm from './views/AddForm.js'
import DoneList from './views/DoneList.js'
import React from 'react'
import TodoList from './views/TodoList.js'

export default () => {
  return (
    <div className="App container mt-3">
      <h2>Todo List</h2>
      <AddForm />
      <div className="view-list my-2">
        <Link className="btn btn-primary btn-sm mx-1" to="/todo">
          未完成
        </Link>
        <Link className="btn btn-primary btn-sm mx-1" to="/done">
          已完成
        </Link>
      </div>

      <Switch>
        <Route component={DoneList} path="/done" />
        <Route component={TodoList} path="/" />
      </Switch>
    </div>
  )
}
