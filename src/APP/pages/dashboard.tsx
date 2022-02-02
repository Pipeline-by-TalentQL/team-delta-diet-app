import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/header';
import Sidebar from '../components/sidebar';

const DashboardContentWrapper = styled.div`
	width: 100vw;
	padding-top: 10px;
	display: grid;
	grid-template-columns: 405px 1fr;
	grid-template-rows: 1fr;
`;

const MainContent = styled.div`
	background: #2196f3;
	color: white;
`;

export default function Dashboard() {
	return (
		<>
			<Header />
			<DashboardContentWrapper>
				<Sidebar />
				<MainContent>Discover Recipes</MainContent>
			</DashboardContentWrapper>
		</>
	);
}
