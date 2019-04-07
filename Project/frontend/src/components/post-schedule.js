import React, {Component} from 'react'
import axios from 'axios'

export default class PostSchedule extends Component {

    componentDidMount() {
        axios.post('http://localhost:3001/api/schedules/' + this.props.match.params.id )
    }

    render() {
        return(
            <div>
                <p>Schedule Posted Successfully!</p>
            </div>
        )
    }
}