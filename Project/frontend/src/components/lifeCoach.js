import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const LifeCoach = props => (
    <tr>
        <td>{props.lifecoach.name}</td>
        <td>{props.lifecoach.age}</td>
        <td>{props.lifecoach.skills}</td>
        <td>{props.lifecoach.intrests}</td>
        <td>{props.lifecoach.pastEvents}</td>
        <td>{props.lifecoach.completedProjects}</td>
        <td>{props.lifecoach.reviews}</td>
        <td>{props.lifecoach.certificates}</td>
        <td>{props.lifecoach.specification}</td>
        <td>
            <Link to={'/Coachschedule/'+props.lifecoach._id}>Schedule</Link>
        </td>
        <td>
            <Link to={'/appointments/createAppointmentlife/'+props.lifecoach._id+'/'+localStorage.getItem('userid')}>Book Appointment</Link>
        </td>
    </tr>
)
const Member = props => (
    <tr>
        <td>{props.lifecoach.name}</td>
        <td>{props.lifecoach.age}</td>
        <td>{props.lifecoach.skills}</td>
        <td>{props.lifecoach.intrests}</td>
        <td>{props.lifecoach.pastEvents}</td>
        <td>{props.lifecoach.completedProjects}</td>
        <td>{props.lifecoach.reviews}</td>
        <td>{props.lifecoach.certificates}</td>
        <td>{props.lifecoach.specification}</td>
        <td>
            <Link to={'/Coachschedule/'+props.lifecoach._id}>Schedule</Link>
        </td>
        <td>
            <Link to={'/appointments/createAppointment/'+props.lifecoach._id+'/'+localStorage.getItem('userid')}>Book Appointment</Link>
        </td>
    </tr>
)

export default class lifeCoach extends Component {

    constructor(props) {
        super(props)
        this.state = {lifecoachs: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/lifecoach/')
            .then(response => {
                this.setState({lifecoachs: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidUpdate() {
        axios.get('http://localhost:3001/api/lifecoach/')
            .then(response => {
                this.setState({lifecoachs: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    coachList() {
        if(localStorage.getItem('jwtToken').startsWith('M')){
        return this.state.lifecoachs.map(function(currentCoach, i) {
            return <Member lifecoach={currentCoach} key={i} />;
        });
    }
    else{
        return this.state.lifecoachs.map(function(currentCoach, i) {
            return <LifeCoach lifecoach={currentCoach} key={i} />;
        });
    }
    }

    render() {
        if(localStorage.getItem('jwtToken')){
            if(localStorage.getItem('jwtToken').startsWith('M')){
        return(
            <div>
                <h3>LifeCoach List</h3>
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
                            <th>Schedule</th>
                            <th>Appointments</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.coachList() }
                    </tbody>
                </table>
            </div>
        )
            }
            if(localStorage.getItem('jwtToken').startsWith('L')){
                return(
                    <div>
                    <h3>LifeCoach List</h3>
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
                                <th>Schedule</th>
                                <th>Appointments</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.coachList() }
                        </tbody>
                    </table>
                </div>
                )
            }
        else{
            return(
                <div>
                    <h3>LifeCoach List</h3>
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
                                <th>Delete</th>
                                <th>Update</th>
                                <th>View my Appointment</th>
                                <th>Create my schedule</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.coachList() }
                        </tbody>
                    </table>
                </div>
            )

        }
    }
}
}