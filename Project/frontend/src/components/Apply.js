import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class MemberList extends Component {
    constructor(props) {
        super(props)
    }
        render(){
            return(
                axios.post('http://localhost:3000/api/task/apply/'+ this.props.match.params.id +'/'+localStorage.getItem('userid'))
                .then(response => {
                })
                .catch(function (error) {
                    console.log(error);
                }),
                window.location.assign("http://localhost:3000/tasks")
            )
            }
        }