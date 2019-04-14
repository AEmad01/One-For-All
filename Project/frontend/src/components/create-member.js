import React, {Component} from 'react'
import axios from 'axios'

export default class CreateMember extends Component {
  
       constructor(props){
        super(props)
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAge=this.onChangeAge.bind(this);
        this.onChangeSkills=this.onChangeSkills.bind(this);
        this.onChangeIntrests=this.onChangeIntrests.bind(this);
        this.onChangePastEvents=this.onChangePastEvents.bind(this);
        this.onChangeCompletedProjects=this.onChangeCompletedProjects.bind(this);
        this.onChangeReviews=this.onChangeReviews.bind(this);
        this.onChangeCertificates=this.onChangeCertificates.bind(this);
        this.onCreate= this.onCreate.bind(this);
        this.state ={
          username: '',
          password:'',
          name: '',
          age:'',
          skills:'',
          intrests:'',
          pastEvents:'',
          completedProjects:'',
          reviews:'',
          certificates:''
        }
       
    }
    onChangeUsername(e){
      this.setState({
        username:e.target.value
      });
    }
    onChangePassword(e){
      this.setState({
        password:e.target.value
      });
    }
    onChangeName(e){
      this.setState({
        name:e.target.value
      });
    }
    onChangeAge(e){
      this.setState({
        age:e.target.value
      });
    }
    onChangeSkills(e){
      this.setState({
        skills:e.target.value
      });
    }
    onChangeIntrests(e){
      this.setState({
        intrests:e.target.value
      });
    }
    onChangePastEvents(e){
      this.setState({
        pastEvents:e.target.value
      });
    }
    onChangeCompletedProjects(e){
      this.setState({
        completedProjects:e.target.value
      });
    }
    onChangeReviews(e){
      this.setState({
        reviews:e.target.value
      });
    }
    onChangeCertificates(e){
      this.setState({
        certificates:e.target.value
      });
    }
    onCreate(e){
      e.preventDefault();
      const newMember ={
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        age:this.state.age,
        skills:this.state.skills,
        intrests:this.state.intrests,
        pastEvents:this.state.pastEvents,
        completedProjects:this.state.completedProjects,
        reviews:this.state.reviews,
        certificates:this.state.certificates
      } 
      axios.post('http://localhost:3001/api/members/createMember',newMember).then(response =>response.data);
      this.setState({
        username: '',
        password: '',
        name: '',
        age:'',
        skills:'',
        intrests:'',
        pastEvents:'',
        completedProjects:'',
        reviews:'',
        certificates:''
      });
      alert("Member created Successfully")
      window.location.assign("http://localhost:3000")
    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Create New Member</h3>
                <form onSubmit={this.onCreate}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                />
                    </div>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                                />
                    </div>
                    <div className="form-group">
                        <label>Skills: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.skills}
                                onChange={this.onChangeSkills}
                                />
                    </div>
                    <div className="form-group">
                        <label>Intrests: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.intrests}
                                onChange={this.onChangeIntrests}
                                />
                    </div>
                    <div className="form-group">
                        <label>Past Events: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.pastEvents}
                                onChange={this.onChangePastEvents}
                                />
                    </div>
                    <div className="form-group">
                        <label>Completed Projects: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.completedProjects}
                                onChange={this.onChangeCompletedProjects}
                                />
                    </div>
                    <div className="form-group">
                        <label>Reviews: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.reviews}
                                onChange={this.onChangeReviews}
                                />
                    </div>
                    <div className="form-group">
                        <label>Certificates: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.certificates}
                                onChange={this.onChangeCertificates}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Member" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}