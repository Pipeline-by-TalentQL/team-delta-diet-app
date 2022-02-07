import React from 'react';
import styled from '@emotion/styled';

import DashboardLayout from '../layouts/dashboard-layoout';

import DashHero from '../components/dashboard/Hero';
import MealsTimeLine from '../components/dashboard/MealTabs';

const DashContentWrapper = styled.div`
	margin-top: 48px;

	.dashboard-header {
		margin-bottom: 28px;
	}
`;
export default function Dashboard() {
	return (
		<DashboardLayout>
			<DashContentWrapper>
				<h1 className="dashboard-header">Discover Recipes</h1>
				<DashHero />
				<MealsTimeLine />
			</DashContentWrapper>
		</DashboardLayout>
	);
}
