/**
 * Created by PutriDamayanti on 8/16/2018.
 */
import React, { Component } from 'react';
import Color from '../components/variable/Color';
import ButtonPage from './ButtonPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Subheader from "../components/basic/Subheader";

export default class Dashboard extends Component {
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
                <Subheader title="Dashboard"/>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="widget bg-peach">
                                <h3>Widget</h3>
                                <p>2000</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget bg-pink">
                                <h3>Widget</h3>
                                <p>2000</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget bg-blue">
                                <h3>Widget</h3>
                                <p>2000</p>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="widget bg-violet">
                                <h3>Widget</h3>
                                <p>2000</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="card">
                                <div className="card-heading">
                                    Card
                                </div>
                                <div className="card-body">
                                    <p>Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}