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
        <td>{props.task.Description}</td>
        <td>{props.task.extraAtt}</td>
        <td>{props.task.Status}</td>
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
    </tr>
) 

export default class TaskList extends Component {

    constructor(props) {
        super(props)
        
        this.forceUpdate()
        this.state = {tasks: []}
    }

    componentDidMount() {
        if(localStorage.getItem('jwtToken')){
            axios.get('http://localhost:3001/api/task/')
                .then(response => {
                    this.setState({tasks: response.data.data});
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
    componentDidUpdate() {
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
                                   <th>Others</th>
                                   <th>status</th>
                                   <th>delete</th>
                                   <th>update</th>
                                   <th>accept</th>
                                   
                                <th>reject</th>
                                <th>addATTribute</th>
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
                       <div>   <Link to={'/task/createTask'}>Create a new task</Link></div>
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
                                   <th>Others</th>
                                   <th>status</th>
                                   <th>delete</th>
                                   <th>update</th>
                                   <th>addATTribute</th>
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
                                   <th>Others</th>
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