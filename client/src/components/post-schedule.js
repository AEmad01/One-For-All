import React, {Component} from 'react'
import axios from 'axios'

export default class PostSchedule extends Component {
  
        constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeSlots=this.onChangeSlots.bind(this);
        this.onChangeSpecification=this.onChangeSpecification.bind(this);
        this.onCreate= this.onCreate.bind(this);

        this.state ={}
       
    }
    onChangeName(e){
      this.setState({
        name:e.target.value
      });
    }
    onChangeSlots(e){
      this.setState({
        slots:e.target.value
      });
    }
    onChangeSpecification(e){
      this.setState({
        specification:e.target.value
      });
    }
   

    onCreate(e){
      e.preventDefault();
      const newSchedule ={
        name: this.state.name,
        slots:this.state.slots,
        specification:this.state.specification,
        lifeCoachID:window.location.href.match(/\/([^\/]+)\/?$/)[1],

      } 
      axios.post('/api/schedules/CreateSchedule/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],newSchedule).then(response =>response.data);
      this.setState({

      });
      alert("Schedule Posted")
      window.history.back();


    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Post a new schedule</h3>
                <form onSubmit={this.onCreate}>
                    <div className="form-group">
                        <label>name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Slots: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.slots}
                                onChange={this.onChangeSlots}
                                />
                    </div>
                    <div className="form-group">
                        <label>specification</label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.specification}
                                onChange={this.onChangeSpecification}
                                />
                    </div>
                  

                    <div className="form-group">
                        <input type="submit" value="Post Schedule" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}