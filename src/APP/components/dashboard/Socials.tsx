import React from 'react';
import styled from '@emotion/styled';
import Facebook from '../../assets/icons/facebook.svg';
import Twitter from '../../assets/icons/twitter.svg';
import Instagram from '../../assets/icons/instagram.svg';
import Whatsapp from '../../assets/icons/whatsapp.svg';

const SocialIconsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;

	svg {
		background: azure;
		padding: 4px;
		width: 24px;
		height: 24px;
		border-radius: 100%;
		cursor: pointer;
	}
`;

export default function Socials() {
	return (
		<SocialIconsWrapper>
			<Facebook />
			<Twitter />
			<Instagram />
			<Whatsapp />
		</SocialIconsWrapper>
	);
}
