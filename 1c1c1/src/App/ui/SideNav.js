import React from "react";


import "../../Assect/css/main.css"


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }



    render() {
        return (
            <div>
                <div className="sidenav navbar navbar-vertical  fixed-left">
                    <div className="scrollbar-inner">
                        <div>
                            <div class="sidenav-header  align-items-center">
                                <a class="navbar-brand"> 1C1C1 </a>
                            </div>
                            <div className="navbar-inner">
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <span className="nav-link-text">Dashboard</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard