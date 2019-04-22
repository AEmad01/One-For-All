import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const MAppointment = props => (
    
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
        <td>
            <Link to={'/Coachschedule/'+props.appointment.lifeCoachID}>Schedule</Link>
        </td>
    </tr>
)


const LAppointment = props => (
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
     <button onClick={() =>  axios({
  method: 'put',
  url: 'http://localhost:3001/api/lifecoach/booking/' + props.appointment._id, 
  data: {
    confirm: 'true', // This is the body part
    date: props.appointment.date,
  }
})}>
        Confirm
      </button>


        </td>
    </tr>
)

export default class AppointmentList extends Component {

    constructor(props) {
        super(props)
        this.state = {appointments: []}
    }

    componentDidMount() {
     

        if(localStorage.getItem('jwtToken').startsWith('L')){

            axios.get('http://localhost:3001/api/appointments/getappsL/'+localStorage.getItem('userid'))
            .then(response => {
                this.setState({appointments: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })

        }
        else {  if(localStorage.getItem('jwtToken').startsWith('M')){

            axios.get('http://localhost:3001/api/appointments/getapps/'+localStorage.getItem('userid'))
            .then(response => {
                this.setState({appointments: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })

        }
        else {





    axios.get('http://localhost:3000/api/appointments')
        .then(response => {
            this.setState({appointments: response.data.data});
        })
        .catch(function (error) {
            console.log(error);
        })
    }
}

}



appointmentList() {
    if(localStorage.getItem('jwtToken').startsWith('M')){
        return this.state.appointments.map(function(currentAppointment, i) {
            return <MAppointment appointment={currentAppointment} key={i} />;
        });
    }
    if(localStorage.getItem('jwtToken').startsWith('L')){
        return this.state.appointments.map(function(currentAppointment, i) {
            return <LAppointment appointment={currentAppointment} key={i} />;
        });
    }
 


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