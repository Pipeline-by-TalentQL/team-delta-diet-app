import React from 'react';
import MealsTimeLine from '../components/dashboard/MealTabs';
import DashboardLayout from '../layouts/dashboard-layoout';

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

				<MealsTimeLine />
			</div>
		</DashboardLayout>
	);
}
