import React, {Component} from 'react'
import axios from 'axios'

const Schedule = props => (
    <tr>
        <td>{props.schedule.name}</td>
        <td>{props.schedule.specification}</td>
        <td>{props.schedule.slots}</td>
    </tr>
)

export default class coachSchedule extends Component {

    constructor(props) {
        super(props)
        this.state = {schedules: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/lifecoach/schedule/'+ this.props.match.params.id )
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
                <h3>Schedule List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Specification</th>
                            <th>Slots</th>
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