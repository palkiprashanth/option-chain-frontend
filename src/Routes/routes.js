import React from 'react';
import { Redirect } from "react-router-dom";
import Dashboard from 'src/views/Dashboard/Dashboard';
import Login from 'src/views/Login/Login';
import Register from 'src/views/Register/Register';

const authRoutes = [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: "/", component: () => <Redirect to="/dashboard" /> }
]

const nonAuthRoutes = [
  { path: '/login', exact: true, name: 'Login' , component : Login},
  { path: '/register', name: 'Registration', component: Register }
]


export {authRoutes,nonAuthRoutes}
