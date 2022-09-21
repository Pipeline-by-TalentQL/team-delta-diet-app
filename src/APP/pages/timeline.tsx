import styled from '@emotion/styled';
import React from 'react';
import DashboardLayout from '../layouts/dashboard-layoout';

const DashContentWrapper = styled.div`
	margin-top: 48px;

	.dashboard-header {
		margin-bottom: 28px;
	}
`;

export default function Timeline() {
	return (
		<DashboardLayout>
			<DashContentWrapper>
				<h1 className="dashboard-header">timeline</h1>
			</DashContentWrapper>
		</DashboardLayout>
	);
}
