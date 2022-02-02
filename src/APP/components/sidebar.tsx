import React from 'react';
import styled from '@emotion/styled';
import Avatar from '@atlaskit/avatar';
import Button from '@atlaskit/button';
import Plus from '../assets/icons/plus.svg';

const SidebarContainer = styled.aside`
	width: 240px;
	margin-left: 145px;
	padding-top: 27px;
	color: #42526e;

	p {
		font-weight: 600;
		font-size: 14px;
		line-height: 16px;
	}
`;

const Divider = styled.div`
	height: 2px;
	background: rgba(9, 30, 66, 0.08);
	border-radius: 1px;
`;

export default function Sidebar() {
	return (
		<SidebarContainer>
			<h2>Sidebar</h2>
			<Avatar appearance="square" size="large" />
			<Button shouldFitContainer appearance="danger">
				<Plus />
				Create New
			</Button>
			<Divider />
			<div>
				<a href="/">Details</a>
				<a href="/">Issue types</a>
				<a href="/"> Notifications</a>
				<a href="/">Features</a>
				<a href="/">Apps</a>
			</div>
		</SidebarContainer>
	);
}
