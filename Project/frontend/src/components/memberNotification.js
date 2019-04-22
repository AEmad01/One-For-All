import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Member = props => (
    <tr>
        <td>{props.member}</td>
        </tr>
)

export default class MemberList extends Component {
 
    constructor(props) {
        super(props)
        this.state = {members: []}
    }
    componentDidMount() {

        axios.get('http://localhost:3000/api/members/notification/'+localStorage.getItem('userid'))
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
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Notifications</th>
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