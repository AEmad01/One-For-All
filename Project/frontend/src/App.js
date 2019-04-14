import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from './components/homepage'
import TaskList from './components/task-list'
import adminaccept from './components/admin-accept-task'
import adminreject from './components/admin-reject-task'
import DeleteTask from './components/delete-task'
import memberList from './components/member-list'
import CreateMember from './components/create-member'
import PartnerList from './components/partner-list'
import CreatePartner from './components/create-partner';
import Slots from './components/slots-list';
import LocationList from './components/locationList'
import updateLocation from './components/updateLocation'
import AppointmentList from './components/appointment-list'
import BookAppointment from './components/book-appointment'
import UpdateTask from './components/updatetask'
import addATT from './components/addATT'
import ScheduleList from './components/show-schedule'
import PostSchedule from './components/post-schedule'

import lifeCoach from './components/lifeCoach'
import CoachSchedule from './components/coachSchedule'
import CoachAppointment from './components/coachAppointment'
import CreateCoach from './components/create-coach'
import DeleteMember from './components/delete-member'
import UpdateMember from './components/updateMember'
import CreateLocation from './components/createLocation'
import DeleteLocation from './components/deleteLocation'
import LifecoachNotification from './components/lifecoachNotification'
import UpdateLifecoach from './components/update-lifecoach'
import DeleteLifecoach from './components/delete-lifecoach'
import SearchTask from './components/search-task'
import viewTask from "./components/viewTask"
import DeletePartner from './components/delete-partner'
import updatePartner from './components/updatePartner'
import Createtask from './components/create task'

import Register from './components/register'
import AdminList from './components/admin-list'
import deleteadmin from "./components/delete-admin"
import updateadmin from "./components/update-admin"
import searchedTask from "./components/searchedTask"


class App extends Component {
  render() {
    if(localStorage.getItem('jwtToken')){
      return (  
        <Router>
          <div className='container'>
  
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h2>Litern-HUB</h2>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/tasks" className="nav-link">Tasks</Link>
                </li>
                <li className="navbar-item">
                <Link to="/members" className="nav-link">Members</Link>
              </li>
              <li className="navbar-item">
                <Link to="/admins" className="nav-link">admins</Link>
              </li>
              <li className="navbar-item">
                <Link to="/partners" className="nav-link">Partners</Link>
              </li>
              <li className="navbar-item">
                <Link to="/lifecoach" className="nav-link">Life Coach</Link>
              </li>
              <li className="navbar-item">
                <Link to="/slots" className="nav-link">Slots</Link>
              </li>
             <li className="navbar-item">
                <Link to="/locations" className="nav-link">Locations</Link>
              </li>
              <li className="navbar-item">
                <Link to="/appointments" className="nav-link">Appointments</Link>
              </li>
              <li className="navbar-item">
                <Link to="/schedules" className="nav-link">Schedules</Link>
              </li>
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Logout</Link>
                </li>
              </ul>
            </div>
          </nav>
  
          <Route path='/' exact component={Homepage} />
          <Route path='/tasks' exact component={TaskList} />
          <Route path='/delete/:id' component={DeleteTask} />
          <Route path='/members' exact component={memberList} />
          <Route path='/members/createMember' exact component={CreateMember} />
          <Route path='/partners' exact component={PartnerList} />
          <Route path='/partners/createPartner' exact component={CreatePartner} />
          <Route path='/slots' exact component={Slots} />
          <Route path='/update/:id' component={UpdateTask} />
          <Route path='/addATT/:id' component={addATT} />
          <Route path='/locations' exact component={LocationList} />
          <Route path='/put/:id' component={updateLocation} />
          <Route path='/appointments' exact component={AppointmentList} />
          <Route path='/appointments/createAppointment' component={BookAppointment} />
          <Route path='/schedules' exact component={ScheduleList} />
          <Route path='/schedule/postSchedule' component={PostSchedule} />
          <Route path='/admins' exact component={AdminList} />

          <Route path='/lifecoach' component={lifeCoach} />
          <Route path='/Coachschedule/:id' component={CoachSchedule} />
          <Route path='/Coachappointments/:id' component={CoachAppointment} />
          <Route path='/CreateCoach' component={CreateCoach} />
          <Route path='/members/delete/:id' component={DeleteMember} />
          <Route path='/members/update/:id' component={UpdateMember} />
          <Route path='/lifecoach/update/:id' component={UpdateLifecoach} />
          <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />
          <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />

          <Route path='/locations/CreateLocation' exact component={CreateLocation} />
          <Route path='/locations/delete/:id' component={DeleteLocation} />
          <Route path='/LifecoachNotification/:id' component={LifecoachNotification} />
          <Route path='/accepttask/:id' exact component={adminaccept} />
          <Route path='/rejecttask/:id' exact component={adminreject} />
          <Route path='/deleteadmin/:id' component={deleteadmin} />
          <Route path='/view' component={viewTask} />
        
          <Route path='/updateadmin/:id' component={updateadmin} />
          <Route path='/search/' component={SearchTask} />
          <Route path='/searched/:id' component={searchedTask} />

          <Route path='/partners/delete/:id' component={DeletePartner} />
          <Route path='/partners/put/:id' component={updatePartner} />
          <Route path='/partners/task/:id' component={Createtask} />
  
          </div>
        </Router>
      )
    }

    return (  
      <Router>
        <div className='container'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h2>Litern-HUB</h2>
        </nav>

          <Route path='/' exact component={Homepage} />
          <Route path='/register' component={Register} />
          <Route path='/CreateCoach' component={CreateCoach} />
          <Route path='/members/createMember' exact component={CreateMember} />
          <Route path='/partners/createPartner' exact component={CreatePartner} />



        </div>
      </Router>
    )
  }
}

export default App;