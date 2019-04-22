import React, {Component} from 'react'
import axios from 'axios'

export default class Createtask extends Component {
    constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeTime=this.onChangeTime.bind(this)
        this.onChangeEffort=this.onChangeEffort.bind(this)
        this.onChangeLevelOfCommitment=this.onChangeLevelOfCommitment.bind(this)
        this.onChangeExperienceLevel=this.onChangeExperienceLevel.bind(this)
        this.onChangeMonetaryCompensation=this.onChangeMonetaryCompensation.bind(this)
        this.onChangeConsultency=this.onChangeConsultency.bind(this)
        this.onChangeSetOfSkills=this.onChangeSetOfSkills.bind(this)
        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.onChangeExtraAtt=this.onChangeExtraAtt.bind(this)
        this.onCreate=this.onCreate.bind(this)
        this.state={
           
            name: ''
        } }
        onChangeName(e){
            this.setState({
                name:e.target.value
            });
        }
        onChangeTime(e){
            this.setState({
                time:e.target.value
            });
        }
        onChangeEffort(e){
            this.setState({
                effort:e.target.value
            });
        }
        onChangeLevelOfCommitment(e){
            this.setState({
                levelOfCommitment:e.target.value
            });
        }
        onChangeExperienceLevel(e){
            this.setState({
                experienceLevel:e.target.value
            });
        }
        onChangeMonetaryCompensation(e){
            this.setState({
                monetaryCompensation:e.target.value
            });
        }
        onChangeConsultency(e){
            this.setState({
                consultency:e.target.value
            });
        }
        onChangeSetOfSkills(e){
            this.setState({
                setOfSkills:e.target.value
            });
        }
        onChangeDescription(e){
            this.setState({
                Description:e.target.value
            });
        }
        onChangeExtraAtt(e){
            this.setState({
                extraAtt:e.target.value
            });
        }
        onCreate(e) {
            e.preventDefault();
            const newTask = {
                name:this.state.name,
                time:this.state.time,
                effort:this.state.effort,
                levelOfCommitment:this.state.levelOfCommitment,
                experienceLevel:this.state.experienceLevel,
                partnerID:localStorage.getItem('userid'),
                partnerName:localStorage.getItem('username'),
                monetaryCompensation:this.state.monetaryCompensation,
                consultency:this.state.consultency,
                setOfSkills:this.state.setOfSkills,
                Description:this.state.Description,
                extraAtt:this.state.extraAtt
               
            };
            axios.post('http://localhost:3001/api/task/partner/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],newTask).then(response =>response.data);
            this.setState({
                name:'',
                time:'',
                effort:'',
                levelOfCommitment:'',
                experienceLevel:'',
                partnerID:'',
                partnerName:'',
                monetaryCompensation:'',
                consultency:'',
                setOfSkills:'',
                Description:'',
                extraAtt:''
                   
            });
            alert("task created")
            window.location.assign("http://localhost:3000/profile");
    }

    render() {
        return(
            <div>
                <h3>Create Task</h3>
                <form onSubmit={this.onCreate}>
                
                  <div className="form-group">
                  <label>Name:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.name}
                         onChange={this.onChangeName}/>
                  </div>
                  <div className="form-group">
                  <label>Time:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.time}
                         onChange={this.onChangeTime}/>

                  </div>
                  <div className="form-group">
                  <label>Effort:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.effort}
                         onChange={this.onChangeEffort}/>
                  </div>
                  <div className="form-group">
                  <label>Level of Commitment:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.levelOfCommitment}
                         onChange={this.onChangeLevelOfCommitment}/>
                  </div>
                  <div className="form-group">
                  <label>Experience Level:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.experienceLevel}
                         onChange={this.onChangeExperienceLevel}/>
                  </div>
                  <div className="form-group">
                  <label>Monetary Compensation:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.monetaryCompensation}
                         onChange={this.onChangeMonetaryCompensation}/>
                  </div>
                  <div className="form-group">
                  <label>Consultency:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.consultency}
                         onChange={this.onChangeConsultency}/>
                  </div>
                  <div className="form-group">
                  <label>Set of Skills:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.setOfSkills}
                         onChange={this.onChangeSetOfSkills}/>

                  </div>
                  
                  <div className="form-group">
                  <label>Description:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.Description}
                         onChange={this.onChangeDescription}/>
                  </div>
                  <div className="form-group">
               
                  </div>
                  <br/>
                  <div className="form-group">
                            <input type="submit" value="create Task" className="btn btn-primary" />
                        </div>

                </form>
            </div>
        )
    }

    }