import React, {Component} from 'react'
import axios from 'axios'

export default class DeleteLifecoach extends Component {

    componentDidMount() {
        axios.delete('http://localhost:3001/api/lifecoach/delete/' + this.props.match.params.id )
        
        alert("Coach updated Successfully")
      window.location.replace("http://localhost:3000/lifecoach");
    }
    

    render() {
        return(
            <div>
                <p>Life coach Deleted Successfully!</p>
            </div>
        )
    }
}