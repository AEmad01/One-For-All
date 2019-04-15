import React, {Component} from 'react'
import axios from 'axios'

export default class CreatePartner extends Component {
  
       constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAge=this.onChangeAge.bind(this);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onCreate= this.onCreate.bind(this);
        this.state ={
          name: '',
          age:'',
          username:'',
          password: '',
        }
       
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
    
    onCreate(e){
      e.preventDefault();
      const newPartner ={
        name: this.state.name,
        age:this.state.age,
        username:this.state.username,
        password:this.state.password
      } 
      axios.post('http://localhost:3001/api/partners/',newPartner).then(response =>response.data).catch( error => {
        if(error == 'Error: Request failed with status code 400'){
            alert('Username already exists')
        }
      });
      this.setState({
        name: '',
        age:'',
        username:'',
        password:'',
      });
      window.location.assign("http://localhost:3000")
    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Create New Patner</h3>
                <form onSubmit={this.onCreate}>
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
                        <input type="submit" value="Create Partner" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}