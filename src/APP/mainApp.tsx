import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';
import './assets/scss/app.scss';
import Login from './pages/login';
import ResetPassword from './pages/reset-password';

function MainApp() {
	let { path } = useRouteMatch();
	return (
		<div>
			<Switch>
				<Route exact component={Login} path={`${path}/login`} />
				<Route
					exact
					component={ResetPassword}
					path={`${path}/reset-password`}
				/>
			</Switch>
		</div>
	);
}

export default MainApp;
