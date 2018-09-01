/**
 * Created by PutriDamayanti on 8/17/2018.
 */
import React, { Component } from 'react';
import Subheader from "../components/basic/Subheader";

export default class ButtonPage extends Component {
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
                <Subheader title="Button" link="/" name="Dashboard"/>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading">Basic Button</div>
                                <div className="card-body">
                                    <button className="btn bg-pink mr-2">Pink</button>
                                    <button className="btn bg-violet mr-2">Violet</button>
                                    <button className="btn bg-blue mr-2">Blue</button>
                                    <button className="btn bg-peach mr-2">Peach</button>
                                    <button className="btn bg-dark mr-2">Dark</button>
                                    <button className="btn bg-red mr-2 mt-2">Red</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading">Rounded Button</div>
                                <div className="card-body">
                                    <button className="btn btn-rounded bg-pink mr-2">Pink</button>
                                    <button className="btn btn-rounded bg-violet mr-2">Violet</button>
                                    <button className="btn btn-rounded bg-blue mr-2">Blue</button>
                                    <button className="btn btn-rounded bg-peach mr-2">Peach</button>
                                    <button className="btn btn-rounded bg-dark mr-2">Dark</button>
                                    <button className="btn btn-rounded bg-red mr-2 mt-2">Red</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading">Outline Button</div>
                                <div className="card-body">
                                    <button className="btn btn-rounded br br-pink mr-2">Pink</button>
                                    <button className="btn btn-rounded br br-violet mr-2">Violet</button>
                                    <button className="btn btn-rounded br br-blue mr-2">Blue</button>
                                    <button className="btn btn-rounded br br-peach mr-2">Peach</button>
                                    <button className="btn btn-rounded br br-dark mr-2">Dark</button>
                                    <button className="btn btn-rounded br br-red mr-2 mt-2">Red</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading">Icon Button</div>
                                <div className="card-body">
                                    <button className="btn btn-rounded br br-pink mr-2"><i className="fa fa-plus"></i> Pink</button>
                                    <button className="btn btn-rounded bg-violet mr-2"><i className="fa fa-trash"></i> Violet</button>
                                    <button className="btn bg-blue mr-2"><i className="fa fa-home"></i> Blue</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading">Button Size & Badge</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <p>Button Size</p>
                                            <button className="btn btn-xs bg-pink mr-2">Small</button>
                                            <button className="btn bg-violet mr-2">Normal</button>
                                            <button className="btn btn-lg bg-peach mr-2">Large</button>
                                        </div>
                                        <div className="col-lg-12">
                                            <p>Badge</p>
                                            <span className="badge bg-red mr-2">Badge</span>
                                            <span className="badge bg-blue"><i className="fa fa-home"/> Badge</span>
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