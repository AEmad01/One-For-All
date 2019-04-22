import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ProA = props => (
    <tr>
        <td>{props.profile.name}</td>
        <td>{props.profile.age}</td>
        <td>
            <Link to={'/updateadmin/'+localStorage.getItem('userid')}>Update</Link>
        </td>
        <td>
            <Link to={'/deleteadmin/'+localStorage.getItem('userid')}>Delete</Link>
        </td>
    </tr>
)

const ProP = props => (
    <tr>
        <td>{props.profile.name}</td>
        <td>{props.profile.age}</td>
        <td>
            <Link to={'/partners/put/'+localStorage.getItem('userid')}>Update</Link>
        </td>
        <td>
            <Link to={'/partners/delete/'+localStorage.getItem('userid')}>Delete</Link>
        </td>
        <td>
            <Link to={'/partners/certaintask/'+localStorage.getItem('userid')}>Task</Link>
        </td>
        <td>
            <Link to={'partners/task/'+localStorage.getItem('userid')}>Create new Task</Link>
        </td>
        <td>{props.profile.Task}</td>
    </tr>
)

const ProM = props => (
    <tr>
        <td>{props.profile.name}</td>
        <td>{props.profile.age}</td>
        <td>{props.profile.skills}</td>
        <td>{props.profile.intrests}</td>
        <td>{props.profile.pastEvents}</td>
        <td>{props.profile.completedProjects}</td>
        <td>{props.profile.reviews}</td>
        <td>{props.profile.certificates}</td>
        <td>
            <Link to={'/members/notification/'+localStorage.getItem('userid')}>View Notifications</Link>
        </td>
        <td>
            <Link to={'/members/update/'+localStorage.getItem('userid')}>Update</Link>
        </td>
        <td>
            <Link to={'/members/delete/'+localStorage.getItem('userid')}>Delete</Link>
        </td>
    </tr>
)

const ProL = props => (
    <tr>
        <td>{props.profile.name}</td>
        <td>{props.profile.age}</td>
        <td>{props.profile.skills}</td>
        <td>{props.profile.intrests}</td>
        <td>{props.profile.pastEvents}</td>
        <td>{props.profile.completedProjects}</td>
        <td>{props.profile.reviews}</td>
        <td>{props.profile.certificates}</td>
        <td>{props.profile.specification}</td>
        <td>{props.profile.salary}</td>
        <td>{props.profile.Schedule}</td>
        <td>{props.profile.Appointments}</td>
        <td>{props.profile.Notification}</td>
        <td>
            <Link to={'/lifecoach/update/'+localStorage.getItem('userid')}>Update</Link>
        </td>
        <td>
            <Link to={'/lifecoach/delete/'+localStorage.getItem('userid')}>Delete</Link>
        </td>
    </tr>
)

export default class Profile extends Component {

    constructor(props) {
        super(props)
        
        this.forceUpdate()
        this.state = {info: []}
    }

    componentDidMount() {
        if(localStorage.getItem('jwtToken').startsWith('A')){
            axios.get('http://localhost:3001/api/admin/getadmin/'+localStorage.getItem('userid'))
                .then(response => {
                    let details = [];

                    details.push({ name: response.data.name, age: response.data.age})
        
                    this.setState({info: details});
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if(localStorage.getItem('jwtToken').startsWith('L')){
            axios.get('http://localhost:3001/api/lifecoach/'+localStorage.getItem('userid'))
                .then(response => {
                    let details = [];

                    details.push({ name: response.data.name, age: response.data.age, skills: response.data.skills,
                        intrests: response.data.intrests, pastEvents: response.data.pastEvents, completedProjects: response.data.completedProjects,
                        reviews: response.data.reviews, certificates: response.data.certificates, specification: response.data.specification,
                        salary: response.data.salary, Schedule: response.data.Schedule, Appointments: response.data.Appointments, Notification: response.data.Notification})
                    this.setState({info: details});
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if(localStorage.getItem('jwtToken').startsWith('P')){
            axios.get('http://localhost:3001/api/partners/'+localStorage.getItem('userid'))
                .then(response => {
                    let details = [];

                    details.push({ name: response.data.name, age: response.data.age, task: response.data.Task})
        
                    this.setState({info: details});
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if(localStorage.getItem('jwtToken').startsWith('M')){
            axios.get('http://localhost:3001/api/members/'+localStorage.getItem('userid'))
                .then(response => {
                    let details = [];

                    details.push({  name: response.data.name, age: response.data.age, skills: response.data.skills,
                        intrests: response.data.intrests, pastEvents: response.data.pastEvents, completedProjects: response.data.completedProjects,
                        reviews: response.data.reviews, certificates: response.data.certificates, notification: response.data.notification})
        
                    this.setState({info: details});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    componentDidUpdate() {
        if(localStorage.getItem('jwtToken').startsWith('A')){
            axios.get('http://localhost:3001/api/getadmin/'+localStorage.getItem('userid'))
                .then(response => {
                    this.setState({info: response.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }


    infoList() {
        if(localStorage.getItem('jwtToken').startsWith('A')){
            return this.state.info.map(function(currentInfo, i) {
                return <ProA profile={currentInfo} key={i} />;
            });
        } else if(localStorage.getItem('jwtToken').startsWith('L')){
            return this.state.info.map(function(currentInfo, i) {
                return <ProL profile={currentInfo} key={i} />;
            });
        } else if(localStorage.getItem('jwtToken').startsWith('P')){
            return this.state.info.map(function(currentInfo, i) {
                return <ProP profile={currentInfo} key={i} />;
            });
        } else if(localStorage.getItem('jwtToken').startsWith('M')){
            return this.state.info.map(function(currentInfo, i) {
                return <ProM profile={currentInfo} key={i} />;
            });
        }
    }

    render() {
        if(localStorage.getItem('jwtToken')){
            if(localStorage.getItem('jwtToken').startsWith('A')){
                return(
                    <div>
                       <h3>Profile</h3>
                       <table className='table table-striped' style={{ marginTop: 20 }}>
                           <thead>
                               <tr>
                                   <th>Name</th>
                                   <th>Age</th>
                                   <th>Update</th>
                                   <th>Delete</th>
                                   
                               </tr>
                           </thead>
                           <tbody>
                               { this.infoList() }
                           </tbody>
                       </table>
                   </div>
               )
            } else if(localStorage.getItem('jwtToken').startsWith('L')){
                return( 
                    <div>
                        <h3>Profile</h3>
                        <table className='table table-striped' style={{ marginTop: 20 }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Skills</th>
                                    <th>Interests</th>
                                    <th>Past Events</th>
                                    <th>Completed Projects</th>
                                    <th>Reviews</th>
                                    <th>Certificates</th>
                                    <th>Specifications</th>
                                    <th>Salary</th>
                                    <th>Schedule</th>
                                    <th>Appointments</th>
                                    <th>Notifications</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.infoList() }
                            </tbody>
                        </table>
                    </div>
                )
            
            } else if(localStorage.getItem('jwtToken').startsWith('P')){
                return( 
                    <div>
                        <h3>Profile</h3>
                        <table className='table table-striped' style={{ marginTop: 20 }}>
                            <thead>
                                <tr>    
                                    <th>Name</th>
                                    <th>Age</th>
                                   <th>Update Information</th>
                                   <th>Delete My Account</th>
                                   <th>View My Tasks</th>
                                </tr>
                            </thead>
                            <tbody>
                                { this.infoList() }
                            </tbody>
                        </table>
                    </div>
                )
            
            } else if(localStorage.getItem('jwtToken').startsWith('M')){
                return(
                    <div>
                
                <h3>Profile</h3>

                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Skills</th>
                            <th>Intrests</th>
                            <th>Past Events</th>
                            <th>Completed Projects</th>
                            <th>Reviews</th>
                            <th>Certificate</th>
                            <th>Notification</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.infoList() }
                    </tbody>
                </table>
            </div>
                )
            }
            
        }
    }
}