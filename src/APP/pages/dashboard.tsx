import React from 'react';

import DashboardLayout from '../layouts/dashboard-layoout';

import DashHero from '../components/dashboard/Hero';
import MealsTimeLine from '../components/dashboard/MealTabs';

export default function Dashboard() {
	return (
		<DashboardLayout>
			<div
				className="dashboard-container"
				style={{
					marginTop: '48px',
				}}
			>
				<h1
					style={{
						marginBottom: '28px',
					}}
				>
					Discover Recipes
				</h1>
				<DashHero />
				<MealsTimeLine />
			</div>
		</DashboardLayout>
	);
}
