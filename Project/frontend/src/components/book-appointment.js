import React, {Component} from 'react'
import axios from 'axios'

export default class BookAppointment extends Component {
  
        constructor(props){
        super(props)
        this.onChangeLocation=this.onChangeLocation.bind(this);
        this.onChangeSlot=this.onChangeSlot.bind(this);
        this.onChangeLifeCoachID=this.onChangeLifeCoachID.bind(this);
        this.onChangeLifeCoachName=this.onChangeLifeCoachName.bind(this);
        this.onChangeMemberID=this.onChangeMemberID.bind(this);
        this.onChangeMemberName=this.onChangeMemberName.bind(this);
        this.onChangeConfirm=this.onChangeConfirm.bind(this);
        this.onCreate= this.onCreate.bind(this);
        this.state ={
          location: '',
          slot:'',
          lifeCoachID:'',
          lifeCoachName:'',
          memberID:'',
          memberName:'',
          confirm:false
        }
       
    }
    onChangeLocation(e){
      this.setState({
        location:e.target.value
      });
    }
    onChangeSlot(e){
      this.setState({
        slot:e.target.value
      });
    }
    onChangeLifeCoachID(e){
      this.setState({
        lifeCoachID:e.target.value
      });
    }
    onChangeLifeCoachName(e){
      this.setState({
        lifeCoachName:e.target.value
      });
    }
    onChangeMemberID(e){
      this.setState({
        memberID:e.target.value
      });
    }
    onChangeMemberName(e){
      this.setState({
        memberName:e.target.value
      });
    }
    onChangeConfirm(e){
      this.setState({
        confirm:e.target.value
      });
    }
    
    onCreate(e){
      e.preventDefault();
      const newAppointment ={
        location: this.state.location,
        slot:this.state.slot,
        lifeCoachID:this.state.lifeCoachID,
        lifeCoachName:this.state.lifeCoachName,
        memberID:this.state.memberID,
        memberName:this.state.memberName,
        confirm:this.state.confirm,
      } 
      axios.post('http://localhost:3001/api/appointments/createAppointment',newAppointment).then(response =>response.data);
      this.setState({
          location: '',
          slot:'',
          lifeCoachID:'',
          lifeCoachName:'',
          memberID:'',
          memberName:'',
          confirm:''
      });
      alert("Appointment Booked Successfully")
    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Book a new appointment</h3>
                <form onSubmit={this.onCreate}>
                    <div className="form-group">
                        <label>Location: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.location}
                                onChange={this.onChangeLocation}
                                />
                    </div>
                    <div className="form-group">
                        <label>Slot: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.slot}
                                onChange={this.onChangeSlot}
                                />
                    </div>
                    <div className="form-group">
                        <label>LifeCoachID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.lifeCoachID}
                                onChange={this.onChangeLifeCoachID}
                                />
                    </div>
                    <div className="form-group">
                        <label>LifeCoach Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.lifeCoachName}
                                onChange={this.onChangeLifeCoachName}
                                />
                    </div>
                    <div className="form-group">
                        <label>MemberID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.memberID}
                                onChange={this.onChangeMemberID}
                                />
                    </div>
                    <div className="form-group">
                        <label>Member Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.memberName}
                                onChange={this.onChangeMemberName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Confrim: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.confirm}
                                onChange={this.onChangeConfirm}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Book Appointment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}