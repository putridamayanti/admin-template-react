/**
 * Created by PutriDamayanti on 8/20/2018.
 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Subheader extends Component {
    render () {
        return(
            <div>
                <div className="subheader">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xs-6">
                                <h5>{this.props.title}</h5>
                            </div>
                            <div className="col-lg-6 col-xs-6">
                                <ol className="breadcrumb">
                                    {
                                        this.props.link ?
                                            <li className="breadcrumb-item"><Link to={""+this.props.link} className="text-dark">{this.props.name}</Link></li>
                                            : ''
                                    }
                                    <li className="breadcrumb-item">{this.props.title}</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}