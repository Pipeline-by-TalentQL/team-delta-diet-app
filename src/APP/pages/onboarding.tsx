import React from 'react';
import styled from '@emotion/styled';
import Sidebar from '../components/sidebar';
import Spacer from '../components/Spacer';

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

export default function Onboarding() {
	return (
		<>
			<Spacer size={66} />
			<DashboardContentWrapper>
				<Sidebar />
				<MainContent>Onboarding</MainContent>
			</DashboardContentWrapper>
		</>
	);
}
