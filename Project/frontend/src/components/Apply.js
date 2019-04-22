import React, {Component} from 'react'
import axios from 'axios'

export default class MemberList extends Component {
    componentDidMount() {
        axios.post('http://localhost:3001/api/task/apply/'+ this.props.match.params.id +'/'+localStorage.getItem('userid'))
        alert('Applied Successfully!')
        window.location.replace("http://localhost:3000/tasks");

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}