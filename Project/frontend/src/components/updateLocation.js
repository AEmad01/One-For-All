import React, {Component} from 'react'
import axios from 'axios'

export default class updateLocation extends Component {
  
       constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onChangeCity=this.onChangeCity.bind(this);
        this.onChangeCountry=this.onChangeCountry.bind(this);
        this.onChangeTime=this.onChangeTime.bind(this);
        this.onChangeMember=this.onChangeMember.bind(this);
        this.onChangeLifeCoach=this.onChangeLifeCoach.bind(this);
        this.onChangeConfirmedLocation=this.onChangeConfirmedLocation.bind(this);

        this.onUpdate= this.onUpdate.bind(this);

        this.state ={

        }
       
    }
    
    onChangeName(e){
      this.setState({
        name:e.target.value
      });
    }
    onChangeAddress(e){
      this.setState({
        address:e.target.value
      });
    }
    onChangeCity(e){
      this.setState({
        city:e.target.value
      });
    }
    onChangeCountry(e){
      this.setState({
        country:e.target.value
      });
    }
    onChangeTime(e){
      this.setState({
        time:e.target.value
      });
    }
    onChangeMember(e){
      this.setState({
        member:e.target.value
      });
    }
    onChangeLifeCoach(e){
      this.setState({
        lifecoach:e.target.value
      });

    }
    onChangeConfirmedLocation(e){
      this.setState({
        confirmedLocation:e.target.value
      });
    }
    onUpdate(e){
      e.preventDefault();
      const upLocation ={
        name: this.state.name,
        address:this.state.address,
        city:this.state.city,
        country:this.state.country,
        time:this.state.time,
        member:this.state.member,
        lifecoach:this.state.lifecoach,
        confirmedLocation:this.state.confirmedLocation
      } 
      axios.put('http://localhost:3000/api/locations/UpdateLocation/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],upLocation).then(response =>response.data);
     
      this.setState({
        name: '',
        address:'',
        city:'',
        country:'',
        time:'',
        member:'',
        lifecoach:'',
        confirmedLocation:''
      });
      alert("Location updated")
window.location.replace("http://localhost:3001/locations");
    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Update Location</h3>
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
                        <label>Address: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                                />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.city}
                                onChange={this.onChangeCity}
                                />
                    </div>
                    <div className="form-group">
                        <label>Country: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.country}
                                onChange={this.onChangeCountry}
                                />
                    </div>
                    <div className="form-group">
                        <label>Time: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.time}
                                onChange={this.onChangeTime}
                                />
                    </div>
                    <div className="form-group">
                        <label>Member: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.member}
                                onChange={this.onChangeMember}
                                />
                    </div>
                    <div className="form-group">
                        <label>LifeCoach: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.lifecoach}
                                onChange={this.onChangeLifeCoach}
                                />
                    </div>
                    <div className="form-group">
                        <label>Confirmed Location: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.confirmedLocation}
                                onChange={this.onChangeConfirmedLocation}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Location" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}