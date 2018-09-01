/**
 * Created by PutriDamayanti on 8/22/2018.
 */
import React, { Component } from 'react';
import Subheader from "../components/basic/Subheader";

export default class DropdownPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 1000);
    }

    render() {
        if (this.state.loading === true) {
            return(
                <div className="container p-4">
                    <div className="loader">LOADING</div>
                </div>
            );
        }

        return(
            <div>
                <Subheader title="Alert" link="/" name="Dashboard"/>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <p>Simple Dropdown</p>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown button
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </div>
                                    <p>Split Dropdown</p>
                                    <div className="btn-group">
                                        <button type="button" className="btn bg-peach">Action</button>
                                        <button type="button" className="btn bg-peach dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="sr-only">Toggle Dropdown</span>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                            <div className="dropdown-divider"/>
                                            <a className="dropdown-item" href="#">Separated link</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}