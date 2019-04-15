import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteMember extends Component {

    componentDidMount() {
        axios.delete('http://localhost:3001/api/members/delete/' + this.props.match.params.id )
        window.location.replace("http://localhost:3001/members");
    }

    render() {
        return(
            <div>
                <p>Member deleted Successfully!</p>
            </div>
            
                    )
    }
}