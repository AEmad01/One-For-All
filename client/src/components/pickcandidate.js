import React, {Component} from 'react'
import axios from 'axios'

export default class pickCandidate extends Component {

    componentDidMount() {
        axios.put('/api/task/chooseApplication/' + this.props.match.params.mid + '/' + this.props.match.params.id )
        window.location.assign('/tasks')
    }

    render() {
        return(
            <div>
                <p>Applicant chosen successfully!</p>
            </div>
        )
    }
}