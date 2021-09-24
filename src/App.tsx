import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './assets/scss/app.scss';
import ErrorBoundary from './components/errors/errorBoundary/errorBoundary';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
const ComponentsPreview = lazy(
	() => import('./pages/componentsPreview/componentsPreview'),
);

const App = () => (
	<Fragment>
		<Navbar />
		<Switch>
			<ErrorBoundary>
				<Suspense fallback={<div>Loading...</div>}>
					<Route exact component={ComponentsPreview} path="/components" />
				</Suspense>
			</ErrorBoundary>
		</Switch>
		<Footer />
	</Fragment>
);

export default App;
