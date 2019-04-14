import React, {Component} from 'react'
import axios from 'axios'
export default class addATT extends Component {
    constructor(props) {
    super(props)
    this.onChangeName=this.onChangeName.bind(this)
    this.onChangeDes=this.onChangeDes.bind(this)
    this.onSubmit=this.onSubmit.bind(this)

    this.state = {
     
    }}
    onChangeName(e){
        this.setState({
            name:e.target.value
        });
    }
    onChangeDes(e){
        this.setState({
            des:e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
        name1:this.state.name,
        data1:this.state.des
        };
       
        axios.put('http://localhost:3001/api/task/addattributeAD/'+this.props.match.params.id,obj).then(response =>response.data);
      this.setState({
        name:'',
        des:''
      });
      alert("attribute added")
      window.location.replace("http://localhost:3000/task");
        this.props.history.push('/');
    }



render(){
    return(
        <div>
            <h3>add attribute</h3>
            <form onSubmit={this.onSubmit}>

            <div className="form-group">
                  <label>NAME:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.name}
                         onChange={this.onChangeName}/>
                  </div>

                  <div className="form-group">
                  <label>des:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.des}
                         onChange={this.onChangeDes}/>
                  </div>
                  <br/>
                  <div className="form-group">
                            <input type="submit" value="add attribute" className="btn btn-primary" />
                        </div>




    </form>
            </div>
        )

}}