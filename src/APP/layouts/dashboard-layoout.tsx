import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useRouteMatch } from 'react-router-dom';
import Header from '../components/header';
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

export default function DashboardLayout({ children }: PropsWithChildren<{}>) {
	let { isExact } = useRouteMatch();
	return (
		<>
			{isExact ? <Header /> : <Spacer size={66} />}
			<DashboardContentWrapper>
				<Sidebar />
				<MainContent>{children}</MainContent>
			</DashboardContentWrapper>
		</>
	);
}
