import React, {Component} from 'react'
import axios from 'axios'

export default class BookAppointment extends Component {
  
        constructor(props){
        super(props)
        this.onChangeMemberID=this.onChangeMemberID.bind(this);
        this.onChangeMemberName=this.onChangeMemberName.bind(this);
        this.onCreate= this.onCreate.bind(this);
        this.state ={}
       
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

    onCreate(e){
      e.preventDefault();
      const newAppointment ={
        lifeCoachID:window.location.href.match(/\/([^\/]+)\/?$/)[1],
        memberID:this.state.memberID,
        memberName:this.state.memberName,
        confirm:this.state.confirm,
      } 
      axios.post('/api/appointments/createAppointment/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],newAppointment).then(response =>response.data);
      this.setState({

      });
      alert("Appointment Booked Successfully")
      window.history.back();

    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Book a new appointment</h3>
                <form onSubmit={this.onCreate}>
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
                        <input type="submit" value="Book Appointment" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}