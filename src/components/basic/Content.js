/**
 * Created by PutriDamayanti on 8/16/2018.
 */
import React, { Component } from 'react';
import DashboardPage from "../../pages/DashboardPage";

export default class Content extends Component {
    renderContent() {
        let page = this.props.page;

        switch (page) {
            case 'dashboard':
                return(<DashboardPage/>);
                break;
        }
    }
    render () {
        return(
            <div>
                <div className="subheader">
                    <h3>Dashboard</h3>
                </div>
                <div className="content">
                    <div className="container p-4">
                        {this.renderContent()}
                    </div>
                </div>
            </div>
        );
    }
}