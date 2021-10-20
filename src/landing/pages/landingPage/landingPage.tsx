import React from 'react';

import '../../assets/scss/app.scss';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import MealAccordion from '../../components/meal-accordion/meal-accordion';

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<MealAccordion />
			<Footer />
		</div>
	);
};

export default LandingPage;
