import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useRouteMatch } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Spacer from '../components/Spacer';

interface DashboardContentWrapperProps {
	dashboard: boolean;
}
const DashboardContentWrapper = styled.div<DashboardContentWrapperProps>`
	width: 100vw;
	height: calc(100vh - 68px);
	padding-top: 10px;
	display: grid;
	grid-template-columns: 405px 1fr;
	grid-template-rows: 1fr;
	background: ${(props) => (props.dashboard ? '#f9fafb' : 'white')};
`;

const MainContent = styled.main`
	padding-left: 30px;
	max-height: calc(100vh - 130px);
	overflow-y: auto;
	.content-wrapper {
		width: calc(100% - 200px);
		overflow-x: hidden;
	}
`;

export default function DashboardLayout({ children }: PropsWithChildren<{}>) {
	let { path } = useRouteMatch();
	return (
		<>
			{path.includes('onboarding') ? <Spacer size={58} /> : <Header />}
			<DashboardContentWrapper dashboard={!path.includes('onboarding')}>
				<Sidebar />
				<MainContent>
					<div className="content-wrapper">{children}</div>
				</MainContent>
			</DashboardContentWrapper>
		</>
	);
}
