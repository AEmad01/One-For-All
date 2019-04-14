import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Location = props => (
    <tr>
        <td>{props.location.name}</td>
        <td>{props.location.address}</td>
        <td>{props.location.city}</td>
        <td>{props.location.country}</td>
        <td>{props.location.time}</td>
        <td>{props.location.member}</td>
        <td>{props.location.lifecoach}</td>
        <td>{props.location.confirmedLocation.toString()}</td>

        <td>
            <Link to={'/put/'+props.location._id}>Update</Link>
        </td>
        <td>
            <Link to={'/locations/delete/'+props.location._id}>Delete</Link>
        </td>
    </tr>
)

export default class LocationList extends Component {

    constructor(props) {
        super(props)
        this.state = {locations: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/locations/')
            .then(response => {
                this.setState({locations: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

   componentDidUpdate() {
        axios.get('http://localhost:3000/api/locations/')
            .then(response => {
                this.setState({locations: response.data.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    locationList() {
        return this.state.locations.map(function(currentLocation, i) {
            return <Location location={currentLocation} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Location list</h3>
                
                <div>   <Link to={'/locations/CreateLocation/'}>Add New Location</Link></div>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Time</th>
                            <th>Member</th>
                            <th>Life Coach</th>
                            <th>Confirmed Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.locationList() }
                    </tbody>
                </table>
            </div>
        )
    }
}