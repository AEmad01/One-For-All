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
    </tr>
) 

export default class TaskList extends Component {
    constructor(props) {
        super(props)
        this.state = {tasks: []}
        this.onLoad= this.onLoad.bind(this);
    }
onLoad(e) {
    e.preventDefault();
    const body={
        name: this.props.match.params.id
    }}
    componentDidMount() {

        axios({
            method: 'post',
            url: '/api/task/search/',
            data: {
              name: this.props.match.params.id, // This is the body part
            }
         })
         .then(response => {
            this.setState({tasks: response.data.data});
            
         }) 
         .catch(err => {
            console.log(err);
         });

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
                                   <th>Description</th>
                                   <th>Others</th>
                                   <th>status</th>
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