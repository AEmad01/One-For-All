import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteTask extends Component {

    componentDidMount() {
        axios.delete('/api/task/' + this.props.match.params.id )
        alert('Task deleted Successfully!')
        window.location.assign('/tasks')
    }

    render() {
        return(
            <div>
                <p></p>
            </div>
        )
    }
}