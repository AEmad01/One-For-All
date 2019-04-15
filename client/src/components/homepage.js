import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import setAuthToken  from '../helpers/setAuthToken'

export default class Homepage extends Component {


    constructor(props){
        if(localStorage.getItem('jwtToken')) window.location.reload()
        localStorage.removeItem('jwtToken')
        super(props)
        this.onChangeusername=this.onChangeusername.bind(this)
        this.onChangePassword=this.onChangePassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
        this.state={}
    }
    
 
   
    onChangeusername(e){
        this.setState({
            username:e.target.value
        });
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        const login = {

            username:this.state.username,
            password:this.state.password
           
        };
        
        axios.post('http://localhost:3001/api/user/login',login)
        .then( response => {
            const token = response.data.token
            const id = response.data.userid
            localStorage.setItem('userid',id)
            localStorage.setItem('jwtToken',token)
            setAuthToken(token)
            window.location.assign('http://localhost:3001/tasks')
        })
        .catch( error => {
            if(error == 'Error: Request failed with status code 404'){
                alert('Username doesnt exist')
            } else if( error == 'Error: Request failed with status code 400'){
                alert('Wrong Password')
            }
        })

        this.setState({

            username:'',
            password:''
               
        });
    }

    
    render() {
        return(
            <div>
                <h3>Login</h3>
                <form onSubmit={this.onSubmit}>
                
                  <div className="form-group">
                  <label>Username:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.username}
                         onChange={this.onChangeusername}/>
                  </div>
                  <div className="form-group">
                  <label>Password:</label>
                  <input type="text"
                        className="form-control"
                         value={this.state.password}
                         onChange={this.onChangePassword}/>

                  </div>
                  <br/>
                  <div className="form-group">
                            <input type="submit" value="login" className="btn btn-primary"/>
                  </div>
                  <div>
                     <h6> Click here to <Link to={'/register'}>register</Link>.</h6>
                  </div>

                </form>
            </div>
        )
    }



}