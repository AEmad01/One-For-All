import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteMember extends Component {

    componentDidMount() {
        axios.delete('/api/members/delete/' + this.props.match.params.id )
        window.location.replace("/members");
    }

    render() {
        return(
            <div>
                <p>Member deleted Successfully!</p>
            </div>
            
                    )
    }
}