import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Admin = props => (
    <tr>
        <td>{props.admin.name}</td>
        <td>{props.admin.age}</td>
    </tr>
)
export default class AdminList extends Component {
  constructor(props) {
    super(props)
    this.state = {admins: []}
}

componentDidMount() {
    axios.get('http://localhost:3000/api/admin/')
        .then(response => {
            this.setState({admins: response.data.data});
        })
        .catch(function (error) {
            console.log(error);
        })
}
componentDidUpdate() {
    axios.get('http://localhost:3000/api/admin/')
        .then(response => {
            this.setState({admins: response.data.data});
        })
        .catch(function (error) {
            console.log(error);
        })
}

adminlist() {
    return this.state.admins.map(function(currentAdmin, i) {
        return <Admin admin={currentAdmin} key={i} />;
    });
}


    
  render() {
    return (
      <div>
        <h3>admin List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.adminlist() }
                    </tbody>
                </table>
      </div>
    )
  }
}
