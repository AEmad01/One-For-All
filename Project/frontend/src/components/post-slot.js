import React, {Component} from 'react'
import axios from 'axios'

export default class PostSlot extends Component {
  
        constructor(props){
        super(props)
        this.onChangeDate=this.onChangeDate.bind(this);
        this.onCreate= this.onCreate.bind(this);

        this.state ={}
       
    }
    onChangeDate(e){
      this.setState({
        date:e.target.value
      });
    }

   

    onCreate(e){
      e.preventDefault();
      const newSlot ={
        date: this.state.date,
        ScheduleID: window.location.href.match(/\/([^\/]+)\/?$/)[1]

      } 
      axios.post('http://localhost:3001/api/slots/',newSlot).then(response =>response.data);
      this.setState({

      });
      alert("Slot Posted")
      window.history.back();


    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Post a new schedule</h3>
                <form onSubmit={this.onCreate}>
                    <div className="form-group">
                        <label>date: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.date}
                                onChange={this.onChangeDate}
                                />
                    </div>
                   


                    <div className="form-group">
                        <input type="submit" value="Post Slot" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}