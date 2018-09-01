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
        setTimeout(() => this.setState({loading: false}), 1000);
    }

    render() {
        if (this.state.loading === true) {
            return (
                <div className="container p-4">
                    <div className="loader">LOADING</div>
                </div>
            );
        }

        return (
            <div>
                <Subheader title="Alert" link="/" name="Dashboard"/>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading bg-violet">Basic Form</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" className="form-control" placeholder="Email"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="password" className="form-control" placeholder="Password"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading bg-peach">Icon Form</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fa fa-envelope"/> </div>
                                                </div>
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fa fa-key"/> </div>
                                                </div>
                                                <input type="password" className="form-control" id="inlineFormInputGroup" placeholder="Password"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading bg-pink">Rounded Icon Form</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="input-group input-rounded mb-2">
                                                <i className="fa fa-envelope"/>
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="input-group input-rounded mb-2">
                                                <i className="fa fa-key"/>
                                                <input type="password" className="form-control" id="inlineFormInputGroup" placeholder="Password"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-heading bg-blue">Rounded Form</div>
                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="input-group input-rounded mb-2">
                                                <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="input-group input-rounded mb-2">
                                                <input type="password" className="form-control" id="inlineFormInputGroup" placeholder="Password"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}