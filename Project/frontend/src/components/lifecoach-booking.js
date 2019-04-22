import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class lifecoachBooking extends Component {
    constructor(props) {
        super(props)
    }
        render(){
            return(
                axios.post('http://localhost:3000/api/appointments/createAppointmentlife/'+ this.props.match.params.id +'/'+localStorage.getItem('userid'))
                .then(response => {                })
                .catch(function (error) {
                    console.log(error);
                }),
                window.location.assign("http://localhost:3000/lifecoach")
            )
            }
        }