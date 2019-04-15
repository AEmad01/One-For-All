import React, {Component} from 'react'
import axios from 'axios'

export default class DeletePartner extends Component {

    componentDidMount() {
        axios.delete('/api/partners/' + this.props.match.params.id )
        alert('Partner Deleted Successfully!')
        window.location.replace("/partners");
    }

    render() {
        return(
            <div>
                
                
            </div>
            
        )
    }
}