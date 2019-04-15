import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


export default class Candidates extends Component {

    constructor(props) {
        super(props)
        this.state = {candidates: []}

    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/task/' + this.props.match.params.id)
            .then(response => {
                this.setState({candidates: response.data.candidates});
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    candidateList() {
        const Candidate = props => (
        <tr>
            <td>{props.candidate.name}</td>
            <td>{props.candidate.age}</td>
            <td>{props.candidate.skills}</td>
            <td>{props.candidate.intrests}</td>
            <td>{props.candidate.pastEvents}</td>
            <td>{props.candidate.completedProjects}</td>
            <td>{props.candidate.reviews}</td>
            <td>{props.candidate.certificates}</td>
            <td>
                <Link to={'/pickcandidate/'+props.candidate._id+'/'+this.props.match.params.id}>pick</Link>
            </td>
        </tr>
    )
        return this.state.candidates.map(function(currentCandidate, i) {
            return <Candidate candidate={currentCandidate} key={i} />;
        });
    }

    render() {
        return(
            <div>
                <h3>Candidate List</h3>
                <table className='table table-striped' style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Skills</th>
                            <th>Interests</th>
                            <th>Past Events</th>
                            <th>Completed Projects</th>
                            <th>Reviews</th>
                            <th>Certificates</th>
                            <th>choose</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.candidateList() }
                    </tbody>
                </table>
            </div>
        )
    }
}