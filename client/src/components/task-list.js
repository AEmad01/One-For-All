import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const TaskA = props => (
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
        <td>{props.task.Description}</td>
        <td>{props.task.extraAtt}</td>
        <td>{props.task.Status.toString()}</td>
        <td>
            <Link to={'/delete/'+props.task._id}>Delete</Link>
        </td>
        <td><Link to={'/update/'+props.task._id}>Update</Link></td> 
        <td>
            <Link to={'/accepttask/'+props.task._id}>accept</Link>
        </td>
        <td>
            <Link to={'/rejecttask/'+props.task._id}>reject</Link>
        </td>
        <td><Link to={'/addATT/'+props.task._id}>Update</Link></td> 
        <td><Link to={'/candidates/'+props.task._id}>Choose Candidate</Link></td>
    </tr>
) 
const TaskP = props => (
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
        <td>{props.task.Description}</td>
        <td>{props.task.extraAtt}</td>
        <td><Link to={'/addATT/'+props.task._id}>Update</Link></td> 
    </tr>
) 

const TaskM = props => (
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
        <td>{props.task.Description}</td>
        <td>{props.task.extraAtt}</td>
    </tr>
) 

export default class TaskList extends Component {

    constructor(props) {
        super(props)
        
        this.forceUpdate()
        this.state = {tasks: []}
    }

    componentDidMount() {
        if(localStorage.getItem('jwtToken').startsWith('A')){
            axios.get('/api/task')
                .then(response => {
                    this.setState({tasks: response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if(localStorage.getItem('jwtToken').startsWith('P')){
            axios.get('/api/task/accepted')
                .then(response => {
                    this.setState({tasks: response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            axios.get('/api/task/accepted')
                .then(response => {
                    this.setState({tasks: response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    componentDidUpdate() {
        if(localStorage.getItem('jwtToken').startsWith('A')){
            axios.get('/api/task')
                .then(response => {
                    this.setState({tasks: response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else if(localStorage.getItem('jwtToken').startsWith('P')){
            axios.get('/api/task/accepted')
                .then(response => {
                    this.setState({tasks: response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            axios.get('/api/task/accepted')
                .then(response => {
                    this.setState({tasks: response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }


    taskList() {
        if(localStorage.getItem('jwtToken').startsWith('A')){
            return this.state.tasks.map(function(currentTask, i) {
                return <TaskA task={currentTask} key={i} />;
            });
        } else if(localStorage.getItem('jwtToken').startsWith('P')){
            return this.state.tasks.map(function(currentTask, i) {
                return <TaskP task={currentTask} key={i} />;
            });
        } else {
            return this.state.tasks.map(function(currentTask, i) {
                return <TaskM task={currentTask} key={i} />;
            });
        }
    }

    render() {
        if(localStorage.getItem('jwtToken')){
            if(localStorage.getItem('jwtToken').startsWith('A')){
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
                                   <th>Description</th>
                                   <th>Extra Attributes</th>
                                   <th>Status</th>
                                   <th>Delete</th>
                                   <th>Update</th>
                                   <th>Accept</th>
                                <th>Reject</th>
                                <th>Add Attribute</th>
                                   <th>Choose Applicant</th>
                                   
                               </tr>
                           </thead>
                           <tbody>
                               { this.taskList() }
                           </tbody>
                       </table>
                   </div>
               )
            } else if(localStorage.getItem('jwtToken').startsWith('P')){
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
                                   <th>Description</th>
                                   <th>Extra Attribute</th>
                                <th>Add Attribute</th>
                               </tr>
                           </thead>
                           <tbody>
                               { this.taskList() }
                           </tbody>
                       </table>
                   </div>
               )
            } else {
                return(
                    <div>
                       <h3>Task List</h3>
                       <Link to={'/search/'}>Search tasks</Link>

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
                                   <th>Description</th>
                                   <th>Extra Attribute</th>
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

        return(
            <div>
                <h4> Please <Link to={'/'}>login</Link> to view tasks </h4>
            </div>
            )
    }
}