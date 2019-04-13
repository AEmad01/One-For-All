import React, { Component } from 'react'
import axios from 'axios'

export default class deleteadmin extends Component {


    componentDidMount() {
        axios.delete('http://localhost:3001/api/admin/deleteadmin/' + this.props.match.params.id )
    }

  render() {
    return (
      <div>
        <p>admin deleted Successfully!</p> 
      </div>
    )
  }
}
