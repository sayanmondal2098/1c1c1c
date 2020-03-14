import React from "react";
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import MaterialTable from 'material-ui/Table'


import "../../Assect/css/main.css"
import "../../Assect/css/util.css"

import SideNav from './SideNav';
import Mainnav from './Mainnav';
// import Tab from '@material-ui/core/Tab'

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datas: [],
            accountBalance: []
        };

    }



    render() {

        const Accounts = [{
            Header: 'Account Number',
            accessor: 'userId',
            minWidth: 30,
            filter: 'fuzzyText',
        }, {
            Header: 'Account Balance',
            accessor: 'id',
            minWidth: 30
        }
        ]

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
                <Mainnav />
                <div className=" admincontainer">
                    <div>
                        <h2>Account Information : </h2>
                        <br />np
                        <ReactTable

                            columns={Accounts}
                            data={this.state.posts}
                            defaultPageSize={1}
                            showPagination={false}
                            
                        >
                        </ReactTable>
                    </div>


                    <div className="">
                        <h3>Transaction Details: </h3>
                        <br />
                        <ReactTable
                            noDataText="No Transaction Data Found"
                            columns={columns}
                            data={this.state.posts}
                            defaultPageSize={10}
                        >
                        </ReactTable>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard