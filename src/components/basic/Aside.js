/**
 * Created by PutriDamayanti on 8/15/2018.
 */
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';
import '../../assets/css/aside.css';
import '../../assets/css/component.css';
import '../../assets/js/admin.js';
import Content from "./Content";
import ButtonPage from '../../../src/pages/ButtonPage';
import DashboardPage from '../../../src/pages/DashboardPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import routes from '../../routes';

const data = [
    { text: 'Dashboard', path: '/', id: 'dashboard', icon: 'home' },
    { text: 'UI Component', path: 'ui-component', id: 'uicomp', icon: 'pencil-alt', submenu: [
        { text: 'Alert', path: '/component/alert'},
        { text: 'Button', path: '/component/button' },
        { text: 'Dropdown', path: '/component/dropdown' },
    ] },
    { text: 'Form', path: '/form', id: 'form', icon: 'file' },
    // { text: 'Pages', path: '/pages', id: 'pages', icon: 'file-alt' }
];

const button = () => {return(<Content page={ButtonPage}/>)};

export default class Aside extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: data
        };
    }
    generateMenu = (item) => {
        if (item.submenu) {
            return(
                <li>
                    <a href={'#'+item.id} data-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i className={'fa fa-'+item.icon+' pr-3'} />
                        {item.text}
                        <i className="fa fa-caret-right float-right"/>
                    </a>
                    <ul className="collapse submenu" id={item.id}>
                        {item.submenu.map(this.generateSubmenu)}
                    </ul>
                </li>
            );
        } else {
            return(
                <li>
                    <Link to={item.path}>
                        <i className={'fa fa-'+item.icon+' pr-3'} />
                        {item.text}
                    </Link>
                </li>
            );
        }
    };

    generateSubmenu = (item) => {
        return(
            <li>
                <Link to={item.path} className="pl-5">
                    <span className="pr-2">o</span> {item.text}
                </Link>
            </li>
        );
    };

    render () {
        let items = this.state.data.map(this.generateMenu);
        return (
            <Router>
                <div>
                    <div className="aside">
                        <div className="logo">
                            <a href="">LOGO</a>
                        </div>
                        <div className="menu">
                            <div className="p-4">
                                <p><strong>Name</strong></p>
                                <p>Admin</p>
                            </div>
                            <div>
                                <ul>
                                    {items}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="page-wrap">
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        );
    }
}