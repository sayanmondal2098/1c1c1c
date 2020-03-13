import React from "react";
import { Redirect } from "react-router-dom";

import "../../Assect/css/main.css"
import "../../Assect/css/util.css"



class Login extends React.Component {
    constructor(props) {
        super(props);
        let isLoggedIn = false
        this.state = {
            email: '',
            password: '',
            emailError: "",
            passwordError: "",
            isLoggedIn
        };

        this.handleemailChange = this.handleemailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleemailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            password: event.target.value
        })
    }

    validate = () => {
        let passwordError = "";
        let emailError = "";
        // let passwordError = "";

        if (!this.state.password || (this.state.password).length<8) {
            passwordError = "password cannot be blank or can't less then 8 char";
        }else{
            passwordError="";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }else{
            emailError="";
        }

        if (emailError || passwordError) {
            this.setState({ emailError, passwordError });
            return false;
        }

        return true;
    };

    handleSubmit(event) {
        event.preventDefault();
        this.validate();
        alert('A name was submitted: ' + this.state.email + " pass: " + this.state.password);
        if (this.state.email === 'Admin' && this.state.password === 'Admin123') {
            this.setState({
                isLoggedIn: true
            })
        } else {
            console.log("Error login")
        }
        console.log(this.state)
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to="/Dash" />
        }
        return (
            <div>
                <div className="limiter">
                    <div className="container">
                        <div className="wrap p-l-55 p-r-55 p-t-65 p-b-50">
                            <div className="login100-form validate-form">
                                <span class="login100-form-title p-b-33">
                                    1C1C1 Login
					            </span>
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.emailError || this.state.passwordError}
                                </div>
                                <div className="wrap-input100">
                                    <input className="input100"
                                        type="text"
                                        name="email"
                                        placeholder="email"
                                        value={this.state.email}
                                        onChange={this.handleemailChange}>
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
                                        Sign in
						            </button>
                                </div>
                                <div className="text-center p-t-45 p-b-4">
                                    <span class="txt1">
                                        Forgot
						            </span>

                                    <a href="localhost" class="txt2 hov1">
                                        email / Password?
						            </a>
                                </div>

                                <div className="text-center p-t-45 p-b-4">
                                    New User
                                    <a class="txt2 hov1" href="Registration">
                                        Register Here
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

export default Login