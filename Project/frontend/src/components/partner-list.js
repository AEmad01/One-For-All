import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Partner = props => (
    <tr>
        <td>{props.partner.name}</td>
        <td>{props.partner.age}</td>
        <td>{props.partner.username}</td>
        {/* <td>{props.partner.password}</td> */}
        

    </tr>
)

export default class ParnterList extends Component {

    constructor(props) {
        super(props)
        this.state = {partners: []}
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/partners/')
            .then(response => {
                //alert(response.data.data[0])
                this.setState({partners: response.data.data});
                
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    partnerList() {
        return this.state.partners.map(function(currentPartner, i) {
            return <Partner partner={currentPartner} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Partner List</h3>

                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Username</th>
                            {/* <th>Password</th> */}
                       
                        </tr>
                    </thead>
                    <tbody>
                        { this.partnerList() }
                    </tbody>
                </table>
            </div>
        )
    }
}