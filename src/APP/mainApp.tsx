import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import './assets/scss/app.scss';

import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import ForgotPassword from './pages/forgot-password';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Onboarding from './pages/onboarding';
import Timeline from './pages/timeline';

function MainApp() {
	let { path } = useRouteMatch();

	// async function getfakeData() {
	// 	try {
	// 		// let response = await fetch('/api/countries');
	// 		let response = await fetch('/api/users');
	// 		let user = await response.json();
	// 		console.log(user);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	// useEffect(() => {
	// 	getfakeData();
	// }, []);

	return (
		<>
			<Switch>
				<Route exact component={Dashboard} path={`${path}`} />
				<Route component={Onboarding} path={`${path}/onboarding`} />
				<Route component={Timeline} path={`${path}/timeline`} />

				<Route component={Login} path={`${path}/login`} />
				<Route component={SignUp} path={`${path}/signup`} />
				<Route component={ResetPassword} path={`${path}/reset-password`} />
				<Route component={ForgotPassword} path={`${path}/forgot-password`} />
			</Switch>
		</>
	);
}

export default MainApp;
