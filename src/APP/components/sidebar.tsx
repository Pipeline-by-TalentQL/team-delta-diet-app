import React from 'react';
import styled from '@emotion/styled';
import Avatar from '@atlaskit/avatar';
import Plus from '../assets/icons/plus.svg';
import Search from '../assets/icons/search.svg';

import { DashboardImages } from '../constants/file-links';

const SidebarContainer = styled.aside`
	width: 240px;
	margin-left: 145px;
	padding-top: 27px;
	color: #42526e;
	min-height: 632px;
	padding-right: 1rem;
	border-right: 2px rgba(9, 30, 66, 0.08) solid;

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

	margin: 18px 0 20px;
`;

const AvatarContainer = styled.div`
	display: flex;
	gap: 0.5rem;
	margin-bottom: 1rem;

	h3 {
		font-size: 14px;
		line-height: 20px;
		color: #42526e;
	}

	p {
		font-size: 12px;
		line-height: 20px;
		color: #6b778c;
	}
`;

const SidebarButton = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10px;
	cursor: pointer;
	padding: 4px 12px;
	width: 100%;
	height: 40px;
	background: #de350b;
	border-radius: 6px;
	outline: none;
	border: 0;
	color: white;

	font-size: 14px;
	line-height: 20px;
	letter-spacing: -0.084px;

	&:hover {
		background: #ff5630;
	}
`;

const Atag = styled.a`
	display: flex;
	align-items: center;
	gap: 1rem;
	box-sizing: border-box;
	width: 100%;
	min-height: 40px;
	margin: 0px;
	padding: 8px 10px;
	border: 0px;
	font-size: 14px;
	outline: 0px;
	text-decoration: none;
	user-select: none;
	color: #42526e;

	&:hover {
		background-color: #f4f5f7;
	}
`;

export default function Sidebar() {
	return (
		<SidebarContainer>
			<AvatarContainer>
				<Avatar
					appearance="square"
					size="large"
					src={DashboardImages.sideBarAvatar}
				/>
				<div>
					<h3>Sidebar</h3>
					<p>Community Project</p>
				</div>
			</AvatarContainer>
			<SidebarButton>
				<Plus />
				Create New
			</SidebarButton>
			<Divider />
			<div>
				<Atag href="/">
					<Search />
					Discover Recipes
				</Atag>
				<Atag href="/">Details</Atag>
				<Atag href="/">Issue types</Atag>
				<Atag href="/"> Notifications</Atag>
				<Atag href="/">Features</Atag>
				<Atag href="/">Apps</Atag>
			</div>
		</SidebarContainer>
	);
}
