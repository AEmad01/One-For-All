import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteLocation extends Component {

    componentDidMount() {
        axios.delete('http://localhost:3001/api/locations/DeleteLocation/' + this.props.match.params.id )
    }

    render() {
        return(
            <div>
                <p>Location Deleted Successfully!</p>
            </div>
        )
    }
}