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
        <td>{props.appointment.confirmSlot.toString()}</td>

        <td>
        <button onClick={() =>  axios({
  method: 'put',
  url: '/api/lifecoach/booking/' + props.appointment._id, 
  data: {
    confirmSlot: 'true', // This is the body part
    date: props.appointment.date,
  }
})}>
        Confirm Slot
      </button>


        </td>
    </tr>
)

export default class LifecoachNotification extends Component {

    constructor(props) {
        super(props)
        this.state = {appointments: []}
    }

    componentDidMount() {
        axios.get('/api/lifecoach/appointments/'+ this.props.match.params.id)
            .then(response => {
                if(this.props.appointment.location!=null){
                this.setState({appointments: response.data.data});
                }
                else{
                alert("No location found")
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    LifecoachNotification() {
        return this.state.appointments.map(function(currentAppointment, i) {
            return <Appointment appointment={currentAppointment} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Appointments</h3>
        
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Location</th>
                            <th>Slot</th>
                            <th>LifeCoachID</th>
                            <th>LifeCoachName</th>
                            <th>MemberID</th>
                            <th>MemberName</th>
                            <th>Confirmed</th>
                            <th>Confirmed Slot</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.LifecoachNotification() }
                    </tbody>
                </table>
            </div>
        )
    }
}