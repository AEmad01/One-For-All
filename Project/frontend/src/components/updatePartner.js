import React, {Component} from 'react'
import axios from 'axios'

export default class updatePartner extends Component {
  
       constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);


        this.onUpdate= this.onUpdate.bind(this);

        this.state ={

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
    onUpdate(e){
      e.preventDefault();
      const upPartner ={
        name: this.state.name,
        age:this.state.age,
        username:this.state.username,
        password:this.state.password,
      } 
      axios.put('http://localhost:3001/api/partners/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],upPartner).then(response =>response.data);
     
      this.setState({
        name: '',
        age:'',
        username:'',
        password:'',
      });
      alert("Partner updated")
  window.location.assign("http://localhost:3000/partners");
    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Update Partner</h3>
                <form onSubmit={this.onUpdate}>
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
                        <input type="submit" value="Update Partner" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}