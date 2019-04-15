import React, {Component} from 'react'
import axios from 'axios'

export default class DeletePartner extends Component {

    componentDidMount() {
        axios.delete('http://localhost:3001/api/partners/' + this.props.match.params.id )
        alert('Partner Deleted Successfully!')
        window.location.replace("http://localhost:3001/partners");
    }

    render() {
        return(
            <div>
                
                
            </div>
            
        )
    }
}