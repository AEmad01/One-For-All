import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteLifecoach extends Component {

    componentDidMount() {
        axios.delete('/api/lifecoach/delete/' + this.props.match.params.id )
        
        alert("LifeCoach Deleted Successfully")
      window.location.replace("/lifecoach");
    }
    

    render() {
        return(
            <div>
                <p>Life coach Deleted Successfully!</p>
            </div>
        )
    }
}