import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from './components/homepage'
import TaskList from './components/task-list'
import DeleteTask from './components/delete-task'
import memberList from './components/member-list'
import CreateMember from './components/create-member'

class App extends Component {
  render() {
    return (  
      <Router>
        <div className='container'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Litern-HUB</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Homepage</Link>
              </li>
              <li className="navbar-item">
                <Link to="/tasks" className="nav-link">Tasks</Link>
              </li>
              <li className="navbar-item">
                <Link to="/members" className="nav-link">Members</Link>
              </li>
            </ul>
          </div>
        </nav>

          <Route path='/' exact component={Homepage} />
          <Route path='/tasks' exact component={TaskList} />
          <Route path='/delete/:id' component={DeleteTask} />
          <Route path='/members' exact component={memberList} />
          <Route path='/members/createMember' exact component={CreateMember} />
        </div>
      </Router>
    )
  }
}

export default App;
