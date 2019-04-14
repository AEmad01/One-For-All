import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Appointment = props => (
    <tr>
        <td>{props.appointment.location}</td>
        <td>{props.appointment.slot}</td>
        <td>{props.appointment.lifeCoachID}</td>
        <td>{props.appointment.lifeCoachName}</td>
        <td>{props.appointment.memberID}</td>
        <td>{props.appointment.memberName}</td>
        <td>{props.appointment.confirm.toString()}</td>
        <td>
            <Link to={'/locations/suggest/'+props.appointment._id}>Suggest Location</Link>
        </td>
    </tr>
)

export default class AppointmentList extends Component {

    constructor(props) {
        super(props)
        this.state = {appointments: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/appointments')
            .then(response => {
                this.setState({appointments: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    appointmentList() {
        return this.state.appointments.map(function(currentAppointment, i) {
            return <Appointment appointment={currentAppointment} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Appointment List</h3>
         <div>   <Link to={'/appointments/createAppointment'}>Book a new appointment</Link></div>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Slot</th>
                            <th>LifeCoachID</th>
                            <th>LifeCoachName</th>
                            <th>MemberID</th>
                            <th>MemberName</th>
                            <th>Confirm</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.appointmentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}