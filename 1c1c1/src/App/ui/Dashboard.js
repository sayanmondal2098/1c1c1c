import React from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


import "../../Assect/css/main.css"
import "../../Assect/css/util.css"

import SideNav from './SideNav';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            accountBalance: []
        };

    }



    render() {
        const columns = [{
            Header: 'userId',
            accessor: 'userId',
            minWidth: 30,
            filter: 'fuzzyText',
        }, {
            Header: 'id',
            accessor: 'id',
            minWidth: 30
        },
        {
            Header: 'title',
            accessor: 'title',
            minWidth: 30
        },
        {
            Header: 'body',
            accessor: 'body',
            minWidth: 30
        }
        ]
        return (
            <div>
                <SideNav />
                <div className=" admincontainer">
                    
                    <div className="table table-responsive">
{/*                         
                        <ReactTable
                            columns={columns}
                            data={this.state.posts}
                            defaultPageSize={10}
                            >
                        </ReactTable> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard