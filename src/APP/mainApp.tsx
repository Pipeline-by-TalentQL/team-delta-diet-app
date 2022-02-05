import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import './assets/scss/app.scss';

import Login from './pages/login';
import ResetPassword from './pages/reset-password';
import ForgotPassword from './pages/forgot-password';
import SignUp from './pages/signup';
import Dashboard from './pages/dashboard';
import Onboarding from './pages/onboarding';

import DashboardLayout from './layouts/dashboard-layoout';

function MainApp() {
	let { path } = useRouteMatch();
	return (
		<>
			<Switch>
				{/* <Route
					exact
					path={`${path}`}
					render={() => <Redirect to={`${path}/login`} />}
				/> */}
				<DashboardLayout>
					<Route exact path={`${path}`} component={Dashboard} />
					<Route component={Onboarding} path={`${path}/onboarding`} />
				</DashboardLayout>
				<Route component={Login} path={`${path}/login`} />
				<Route component={SignUp} path={`${path}/signup`} />
				<Route component={ResetPassword} path={`${path}/reset-password`} />
				<Route component={ForgotPassword} path={`${path}/forgot-password`} />
			</Switch>
		</>
	);
}

export default MainApp;
