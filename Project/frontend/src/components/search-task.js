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
        this.onChangeName=this.onChangeName.bind(this);
        this.onSearch=this.onSearch.bind(this)
        this.forceUpdate()
        this.state = {name:''}
    }
    
    onChangeName(e){
            this.setState({
              name:e.target.value
            });
          }
    onSearch(e){
        e.preventDefault();
    window.location.assign("/searched/"+this.state.name);

    }

    render() {

                return(
                    <div>
                       <h3>Task List</h3>
                       <div className="form-group">
                       <form onSubmit={this.onSearch}>
                        <label>Search by name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                                <div className="form-group">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                                </form>

                    </div>
                       
                   </div>
               )
            }
            
}