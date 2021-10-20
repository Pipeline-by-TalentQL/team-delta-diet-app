import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from './landing/components/errors/errorBoundary/errorBoundary';
const ComponentsPreview = lazy(
	() => import('./landing/pages/componentsPreview/componentsPreview'),
);
const LandingPage = lazy(
	() => import('./landing/pages/landingPage/landingPage'),
);

const App = () => (
	<Fragment>
		<Switch>
			<ErrorBoundary>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact component={ComponentsPreview} path="/components" />
					<Route exact component={LandingPage} path="/" />
				</Suspense>
			</ErrorBoundary>
		</Switch>
	</Fragment>
);

export default App;
