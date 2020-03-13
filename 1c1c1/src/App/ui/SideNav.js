import React from "react";
import { } from "bootstrap";


import "../../Assect/css/main.css"


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }



    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="sidebar" data-color="purple" >
                        <div className="sidebar-wrapper">
                            <div className="logo">
                                <a href="" className="simple-text" style={{ color: "black" }}>
                                    1C1C1
        </a>
                            </div>
                            <ul className="nav" style={{ paddingTop: "30%" }}>
                                <li  style={{ paddingTop: "50%" }}>
                                    <div className="active">
                                    <a href="dashboard.html">
                                        
                                        <p>Dashboard</p>
                                    </a>
                                    </div>
                                </li>
                                <li className="active">
                                    <a href="dashboard.html">
                                        
                                        <p>Account</p>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="dashboard.html">
                                       
                                        <p>Dashboard</p>
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="dashboard.html">
                                        
                                        <p>Log Out</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default SideNav