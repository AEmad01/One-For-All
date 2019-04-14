import React, {Component} from 'react'
import axios from 'axios'


export default class adminaccept extends Component {
    // constructor(props){
    //     super(props)
    //     this.onChangeStatus=this.onChangeStatus.bind(this)
    //     this.state={
    //     }
    // }
    // onChangeStatus(e){
    //     this.setState({
    //         Status:e.target.value
    //     });
    // }
    componentDidMount() {
        axios.put('http://localhost:3001/api/task/accepttask/' + this.props.match.params.id )
        .catch(error => alert(error))
    }

    render() {
        return(
            <div>
                <p>Task accepted Successfully!</p>
            </div>
        )
    }
}