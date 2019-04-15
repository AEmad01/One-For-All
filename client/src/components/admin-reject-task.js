import React, { Component } from 'react'
import axios from 'axios'
export default class adminreject extends Component {
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
        axios.put('http://localhost:3001/api/task/rejecttask/' + this.props.match.params.id )
        window.location.assign('http://localhost:3001/tasks')
    }

    render() {
        return(
            <div>
                <p>Task rejected Successfully!</p>
            </div>
        )
    }
}
