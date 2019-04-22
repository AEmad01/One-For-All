import React, { Component } from 'react'
import axios from 'axios'
export default class updateadmin extends Component {
    constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeAge=this.onChangeAge.bind(this)
        this.onUpdate= this.onUpdate.bind(this);
        this.state={ 
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
    onUpdate(e) {
        e.preventDefault();
        const obj = {
            name:this.state.name,
            age:this.state.age
     };
     axios.put('/api/admin/updateAdmin/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],obj).then(response =>response.data);
        this.setState({
            name:'',
            age:'',
        }); 
        alert("admin updated")
        window.location.assign('/profile')
    }

  render() {
    return (
        <div>
        <h3>Update admin</h3>
        <form onSubmit={this.onUpdate}>
        
          <div className="form-group">
          <label>Name:</label>
          <input type="text"
                className="form-control"
                 value={this.state.name}
                 onChange={this.onChangeName}/>
          </div>
          <div className="form-group">
          <label>Age:</label>
          <input type="text"
                className="form-control"
                 value={this.state.age}
                 onChange={this.onChangeAge}/>
          </div>
          <br/>
          <div className="form-group">
                    <input type="submit" value="Update admin" className="btn btn-primary" />
                </div>

        </form>
    </div>
    )
  }
}
