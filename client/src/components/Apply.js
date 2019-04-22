import React, {Component} from 'react'
import axios from 'axios'

export default class MemberList extends Component {
    componentDidMount() {
        axios.post('/api/task/apply/'+ this.props.match.params.id +'/'+localStorage.getItem('userid'))
        alert('Applied Successfully!')
        window.location.replace("/tasks");

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}