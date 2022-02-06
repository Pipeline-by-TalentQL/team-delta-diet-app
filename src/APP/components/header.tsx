import React from 'react';
import styled from '@emotion/styled';
import Alarm from '../assets/icons/alarm.svg';
import Message from '../assets/icons/message.svg';
import Avatar from '../assets/images/avatar.png';

const NavContainer = styled.nav`
	width: 100vw;
	padding: 12px 170px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
	background: white;
`;

const IconsContainer = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
`;

const NavSearch = styled.input`
	width: 212px;
	border: 2px solid #dfe1e6;
	border-radius: 5px;
	padding: 0.5rem 10px;
`;

const HeaderIcons = () => {
	return (
		<IconsContainer>
			<Alarm />
			<Message />
			<img src={Avatar} alt="avatar" />
		</IconsContainer>
	);
};

export default function Header() {
	return (
		<NavContainer>
			<h2>Diet ng</h2>
			<NavSearch placeholder="Search" />
			<HeaderIcons />
		</NavContainer>
	);
}
