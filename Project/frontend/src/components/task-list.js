import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Task = props => (
    <tr>
        <td>{props.task.name}</td>
        <td>{props.task.time}</td>
        <td>{props.task.effort}</td>
        <td>{props.task.levelOfCommitment}</td>
        <td>{props.task.experienceLevel}</td>
        <td>{props.task.partnerName}</td>
        <td>{props.task.monetaryCompensation}</td>
        <td>{props.task.consultency}</td>
        <td>{props.task.setOfSkills}</td>
        <td>{props.task.memberName}</td>
        <td>{props.task.negotiation}</td>
        <td>{props.task.Description}</td>
        <td>{props.task.extraAtt.toString()}</td>
        <td>
            <Link to={'/delete/'+props.task._id}>Delete</Link>
        </td>
    </tr>
)

export default class TaskList extends Component {

    constructor(props) {
        super(props)
        this.state = {tasks: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/task/')
            .then(response => {
                this.setState({tasks: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    taskList() {
        return this.state.tasks.map(function(currentTask, i) {
            return <Task task={currentTask} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Task List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Effort</th>
                            <th>Level of Commitment</th>
                            <th>Experience Level</th>
                            <th>Partner</th>
                            <th>Monetary Compensation</th>
                            <th>Consultency</th>
                            <th>Set Of Skills</th>
                            <th>Assigned Member</th>
                            <th>Negotiation</th>
                            <th>Description</th>
                            <th>Others</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.taskList() }
                    </tbody>
                </table>
            </div>
        )
    }
}