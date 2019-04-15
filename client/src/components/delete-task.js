import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteTask extends Component {

    componentDidMount() {
        axios.delete('/api/task/' + this.props.match.params.id )
    }

    render() {
        return(
            <div>
                <p>Task deleted Successfully!</p>
            </div>
        )
    }
}