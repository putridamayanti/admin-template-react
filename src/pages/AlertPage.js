/**
 * Created by PutriDamayanti on 8/22/2018.
 */
import React, { Component } from 'react';
import Subheader from "../components/basic/Subheader";

export default class AlertPage extends Component {

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
                                    <div className="alert alert-primary" role="alert">
                                        This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-secondary" role="alert">
                                        This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-success" role="alert">
                                        This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-danger" role="alert">
                                        This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-warning" role="alert">
                                        This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-info" role="alert">
                                        This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-light" role="alert">
                                        This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                    <div className="alert alert-dark" role="alert">
                                        This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="alert alert-success" role="alert">
                                        <h4 className="alert-heading">Well done!</h4>
                                        <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                                        <hr/>
                                            <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                                    </div>
                                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
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