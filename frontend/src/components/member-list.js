import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Member = props => (
    <tr>
        <td>{props.member.name}</td>
        <td>{props.member.age}</td>
        <td>{props.member.skills}</td>
        <td>{props.member.intrests}</td>
        <td>{props.member.pastEvents}</td>
        <td>{props.member.completedProjects}</td>
        <td>{props.member.reviews}</td>
        <td>{props.member.certificates}</td>
        <td>{props.member.notification}</td>
        <td>
            <Link to={'/members/delete/'+props.member._id}>Delete</Link>
        </td>
        <td><Link to={'/members/update/'+props.member._id}>Update</Link></td> 
        <td> <Link to={'/view/'+props.member._id}>View tasks</Link></td>

        </tr>
)

export default class MemberList extends Component {
 
    constructor(props) {
        super(props)
        this.state = {members: []}
    }
    componentDidMount() {
        axios.get('http://localhost:3000/api/members/')
            .then(response => {
                this.setState({members: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    memberList() {
        return this.state.members.map(function(currentMember, i) {
            return <Member member={currentMember} key={i} />;
        });
    }
    render() {
        return(
            <div>
                
                <h3>Member List</h3>
                <div>   <Link to={'/tasks'}>View tasks</Link></div>
                
<div>   <Link to={'/members/createMember'}>Create a new member</Link></div>

                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Skills</th>
                            <th>Intrests</th>
                            <th>Past Events</th>
                            <th>Completed Projects</th>
                            <th>Reviews</th>
                            <th>Certificate</th>
                            <th>Notification</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.memberList() }
                    </tbody>
                </table>
            </div>
        )
    }
}