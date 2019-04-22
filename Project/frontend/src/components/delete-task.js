import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteTask extends Component {

    componentDidMount() {
        axios.delete('http://localhost:3001/api/task/' + this.props.match.params.id )
        alert('Task deleted Successfully!')
        window.location.assign('http://localhost:3000/tasks')
    }

    render() {
        return(
            <div>
                <p></p>
            </div>
        )
    }
}