import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Schedule = props => (
    <tr>
        <td>{props.schedule.name}</td>
        <td>{props.schedule.specification}</td>
        <td>{props.schedule.slots}</td>
        <td>{props.schedule.lifeCoachID}</td>

    </tr>
)

export default class ScheduleList extends Component {

    constructor(props) {
        super(props)
        this.state = {schedules: []}
    }

    componentDidMount() {
        axios.get('/api/schedules/GetAllSchedule')
            .then(response => {
                this.setState({schedules: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    componentDidUpdate() {
        axios.get('/api/schedules/GetAllSchedule')
            .then(response => {
                this.setState({schedules: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
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
                <div>   <Link to={'/schedule/postSchedule'}>Post a new schedule</Link></div>

                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specification</th>
                            <th>Slots</th>
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