import React from "react";
import { } from "bootstrap";


import "../../Assect/css/main.css"


class Mainnav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }



    render() {
        return (
            <div>
                <div class="topnav">
                    <div class="topnav-right">
                        <a href="#search">Search</a>
                        <a href="#about">About</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mainnav