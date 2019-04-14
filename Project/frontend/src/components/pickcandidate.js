import React, {Component} from 'react'
import axios from 'axios'

export default class pickCandidate extends Component {

    componentDidMount() {
        axios.put('http://localhost:3001/api/task/chooseApplication/' + this.props.match.params.mid + '/' + this.props.match.params.id )
        window.location.assign('http://localhost:3000/tasks')
    }

    render() {
        return(
            <div>
                <p>Applicant chosen successfully!</p>
            </div>
        )
    }
}