import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Appointment = props => (
    <tr>
        <td>{props.appointment.location}</td>
        <td>{props.appointment.slot}</td>
        <td>{props.appointment.lifeCoachName}</td>
        <td>{props.appointment.memberName}</td>
        <td>{props.appointment.confirm.toString()}</td>
    </tr>
)

export default class coachAppointment extends Component {

    constructor(props) {
        super(props)
        this.state = {appointments: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/lifecoach/appointments/'+ this.props.match.params.id )
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
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Slot</th>
                            <th>LifeCoach Name</th>
                            <th>Member Name</th>
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