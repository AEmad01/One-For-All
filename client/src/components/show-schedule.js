import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Schedule = props => (
    <tr>
        <td>{props.schedule.name}</td>
        <td>{props.schedule.specification}</td>
        <td>{props.schedule.lifeCoachID}</td>
        <td>
            <Link to={'/post-slot/'+props.schedule._id}>Post Slot</Link>

   
       
  


        </td>
        <td>            <Link to={'/slots/'+props.schedule._id}>View Slots</Link>
</td>
    </tr>
)

export default class ScheduleList extends Component {

    constructor(props) {
        super(props)
        this.state = {schedules: []}
    }

    componentDidMount() {
        if(localStorage.getItem('jwtToken').startsWith('L')){
            axios.get('/api/schedules/getSchLifecoach/'+localStorage.getItem('userid'))
            .then(response => {
                this.setState({schedules: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
        }
        else{
        axios.get('/api/schedules/GetAllSchedule')
            .then(response => {
                this.setState({schedules: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    }



    scheduleList() {
        return this.state.schedules.map(function(currentSchedule, i) {
            return <Schedule schedule={currentSchedule} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Schedule </h3>

                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specification</th>
                            <th>LifeCoach ID</th>

                        </tr>
                    </thead>
                    <tbody>
                        { this.scheduleList() }
                    </tbody>
                </table>
            </div>
        )
    }
}