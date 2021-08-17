import './styles.css'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import AddForm from './views/AddForm.js'
import DoneList from './views/DoneList.js'
import React from 'react'
import TodoList from './views/TodoList.js'

export default () => {
  return (
    <div className="App container mt-3">
      <h2>Todo List</h2>
      <AddForm />
      <HashRouter>
        <nav className="d-flex">
          <ul className="pagination pagination-sm my-2 mx-auto">
            <li className="page-item">
              <Link className="page-link" to="/todo">
                未完成清單
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/done">
                已完成清單
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route component={DoneList} path="/done" />
          <Route component={TodoList} path="/" />
        </Switch>
      </HashRouter>
    </div>
  )
}
