import React,{Component} from 'react';
import styles from './login.module.css';


class Login extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <div className="container text-center">
                    <h2>Login for Registered User</h2>
                </div>
                <form className={styles.mainForm}>
                    <div className="form-group">
                        <label >Email Id/Phone Number</label>
                        <input  name="loginid"
                        className="form-control"  placeholder="Enter Email Id/Phone Number"/>
                    </div>
                    <div className="form-group">
                        <label >Password</label>
                        <input  name="password"
                        className="form-control"  placeholder="Enter Password"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
