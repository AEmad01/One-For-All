import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class Register extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <h2>Register as a <Link to={'/members/createMember'}>Member</Link> </h2>
                <h2>Register as a <Link to={'/partners/createPartner'}>Partner</Link> </h2>
                <h2>Register as a <Link to={'/CreateCoach'}>LifeCoach</Link> </h2>
            </div>
        )
    }
}