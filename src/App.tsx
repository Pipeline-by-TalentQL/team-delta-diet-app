import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/scss/app.scss';

import ErrorBoundary from './components/errors/errorBoundary/errorBoundary';
const ComponentsPreview = lazy(
	() => import('./pages/componentsPreview/componentsPreview'),
);

const App = () => (
	<Fragment>
		<Switch>
			<ErrorBoundary>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact component={ComponentsPreview} path="/components"></Route>
				</Suspense>
			</ErrorBoundary>
		</Switch>
	</Fragment>
);

export default App;
