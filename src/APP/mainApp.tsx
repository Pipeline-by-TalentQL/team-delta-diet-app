import React from 'react';
import { useRouteMatch, Switch, Route, Redirect } from 'react-router-dom';
import './assets/scss/app.scss';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';

function MainApp() {
	let { path } = useRouteMatch();
	return (
		<>
			<Switch>
				<Route
					exact
					path={`${path}/`}
					render={() => <Redirect to={`${path}/login`} />}
				/>
				<Route exact component={Login} path={`${path}/login`} />
				<Route
					exact
					component={ResetPassword}
					path={`${path}/reset-password`}
				/>
			</Switch>
		</>
	);
}

export default MainApp;
