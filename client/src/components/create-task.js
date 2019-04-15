import React, {Component} from 'react'
import axios from 'axios'
export default class CreateTask extends Component {
    constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this)
        this.onChangeTime=this.onChangeTime.bind(this)
        this.onChangeEffort=this.onChangeEffort.bind(this)
        this.onChangeLevelOfCommitment=this.onChangeLevelOfCommitment.bind(this)
        this.onChangeExperienceLevel=this.onChangeExperienceLevel.bind(this)
        this.onChangePartnerID=this.onChangePartnerID.bind(this)
        this.onChangePartnerName=this.onChangePartnerName.bind(this)
        this.onChangeMonetaryCompensation=this.onChangeMonetaryCompensation.bind(this)
        this.onChangeConsultency=this.onChangeConsultency.bind(this)
        this.onChangeSetOfSkills=this.onChangeSetOfSkills.bind(this)
        this.onChangeMemberID=this.onChangeMemberID.bind(this)
        this.onChangeMemberName=this.onChangeMemberName.bind(this)
        this.onChangeCandidates=this.onChangeCandidates.bind(this)
        this.onChangeNegotiation=this.onChangeNegotiation.bind(this)
        this.onChangeDescription=this.onChangeDescription.bind(this)
        this.onChangeExtraAtt=this.onChangeExtraAtt.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.state={      
        }
    }
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
    onChangePartnerID(e){
        this.setState({
            partnerID:e.target.value
        });
    }
    onChangePartnerName(e){
        this.setState({
            partnerName:e.target.value
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
    onChangeCandidates(e){
        this.setState({
            candidates:e.target.value
        });
    }
    onChangeNegotiation(e){
        this.setState({
            negotiation:e.target.value
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
    onSubmit(e) {
        e.preventDefault();
        const newTask = {
            name:this.state.name,
            time:this.state.time,
            effort:this.state.effort,
            levelOfCommitment:this.state.levelOfCommitment,
            experienceLevel:this.state.experienceLevel,
            partnerID:this.state.partnerID,
            partnerName:this.state.partnerName,
            monetaryCompensation:this.state.monetaryCompensation,
            consultency:this.state.consultency,
            setOfSkills:this.state.setOfSkills,
            memberID:this.state.memberID,
            memberName:this.state.memberName,
            candidates:this.state.candidates,
            negotiation:this.state.negotiation,
            Description:this.state.Description,
            extraAtt:this.state.extraAtt
           
        };
        axios.post('/api/task/admin/5caa4ed1c4f1815004f3f754',newTask).then(response =>response.data);
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
            memberID:'',
            memberName:'',
            Description:'',
            extraAtt:'',
               
        });   
        alert("task created")
        window.location.replace("/task");
        this.props.history.push('/');
    }
    render() {
        return(
            <div>
                <h3>create task</h3>
                <form onSubmit={this.onSubmit}>
                
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
                  <label>LevelOfCommitment:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.levelOfCommitment}
                         onChange={this.onChangeLevelOfCommitment}/>
                  </div>
                  <div className="form-group">
                  <label>ExperienceLevel:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.experienceLevel}
                         onChange={this.onChangeExperienceLevel}/>
                  </div>
                  <div className="form-group">
                  <label>PartnerID:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.partnerID}
                         onChange={this.onChangePartnerID}/>
                  </div>
                  <div className="form-group">
                  <label>PartnerName:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.partnerName}
                         onChange={this.onChangePartnerName}/>
                  </div>
                  <div className="form-group">
                  <label>MonetaryCompensation:</label>
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
                  <label>SetOfSkills:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.setOfSkills}
                         onChange={this.onChangeSetOfSkills}/>

                  </div>
                  <div className="form-group">
                  <label>MemberID:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.memberID}
                         onChange={this.onChangeMemberID}/>
                  </div>
                  <div className="form-group">
                  <label>MemberName:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.memberName}
                         onChange={this.onChangeMemberName}/>
                  </div>
                  <div className="form-group">
                  <label>Description:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.Description}
                         onChange={this.onChangeDescription}/>
                  </div>
                  <div className="form-group">
                  <label>ExtraAtt:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.extraAtt}
                         onChange={this.onChangeExtraAtt}/>
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