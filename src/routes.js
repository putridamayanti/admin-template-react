/**
 * Created by PutriDamayanti on 8/21/2018.
 */
import React from 'react';

import DashboardPage from './pages/DashboardPage';
import AlertPage from './pages/AlertPage';
import ButtonPage from './pages/ButtonPage';
import DropdownPage from './pages/DropdownPage';
import FormPage from './pages/FormPage';

const routes = [
    { path: '/', exact: true, name: 'Dashboard', component: DashboardPage },
    { path: '/component/alert', exact: true, name: 'Button', component: AlertPage },
    { path: '/component/button', exact: true, name: 'Button', component: ButtonPage },
    { path: '/component/dropdown', exact: true, name: 'Dropdown', component: DropdownPage },
    { path: '/form', exact: true, name: 'Form', component: FormPage },

];

export default routes;