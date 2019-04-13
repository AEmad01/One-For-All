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
        <td>{props.lifecoach.salary}</td>
        <td>{props.lifecoach.Notification.toString()}</td>
        <td>
            <Link to={'/Coachschedule/'+props.lifecoach._id}>Schedule</Link>
        </td>
        <td>
            <Link to={'/appointments/createAppointment/'+props.lifecoach._id}>Book Appointment</Link>
        </td>
    </tr>
)

export default class lifeCoach extends Component {

    constructor(props) {
        super(props)
        this.state = {lifecoachs: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/lifecoach/')
            .then(response => {
                this.setState({lifecoachs: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    coachList() {
        return this.state.lifecoachs.map(function(currentCoach, i) {
            return <LifeCoach lifecoach={currentCoach} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>LifeCoach List</h3>
                <Link to={'/CreateCoach'}>Create a new life coach</Link>
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
                            <th>Notification</th>
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
}