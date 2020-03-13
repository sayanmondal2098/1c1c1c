import React from "react";
import { Redirect } from "react-router-dom";

import "../../Assect/css/main.css"
import "../../Assect/css/util.css"



class Registration extends React.Component {
    constructor(props) {
        super(props);
        let isLoggedIn = false
        this.state = {
            username: '',
            password: '',
            isLoggedIn   
        };

        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({ 
            username: event.target.value        
        });
    }

    handlePasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.username + "pass: " + this.state.password);
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to="/Dash"/>
        }
        return (
            <div>
                <div className="limiter">
                    <div className="container">
                        <div className="wrap p-l-55 p-r-55 p-t-65 p-b-50">
                            <div className="login100-form validate-form">
                                <span class="login100-form-title p-b-33">
                                    1C1C1 Registration
					            </span>
                                <div className="wrap-input100">
                                    <input className="input100"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        value={this.state.username}
                                        onChange={this.handleUsernameChange}>
                                    </input>
                                    <span className="focus-input100-1"></span>
                                    <span className="focus-input100-2"></span>
                                </div>

                                <div className="wrap-input100">
                                    <input class="input100" 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handlePasswordChange}
                                    ></input>
                                    <span className="focus-input100-1"></span>
                                    <span className="focus-input100-2"></span>
                                </div>

                                <div className="m-t-20">
                                    <button className="login100-form-btn"
                                     onClick={this.handleSubmit}>
                                        Sign Up
						            </button>
                                </div>
                                <div className="text-center p-t-45 p-b-4">
                                    <span class="txt1">
                                        Forgot
						            </span>

                                    <a href="localhost" class="txt2 hov1">
                                        Username / Password?
						            </a>
                                </div>

                                <div className="text-center p-t-45 p-b-4">
                                    Have an account 
                                    <a class="txt2 hov1" href="Login">
                                        Login Here
                                    </a>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Registration