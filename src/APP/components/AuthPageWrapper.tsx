import React, { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { device } from '../constants/device-sizes';
import LoginImg from '../assets/images/login.png';
import ResetPasswordImg from '../assets/images/reset-password.png';

interface DefaultImageProps {
	imageSrc?: string;
	imageAlt?: string;
	pageTitle: 'login' | 'signup' | 'resetPassword';
}
type AuthProps = DefaultImageProps & PropsWithChildren<{}>;

const AuthWrapperStyled = styled.div`
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: 1fr;

	@media ${device.laptop} {
		grid-template-columns: 55% 45%;
		grid-template-rows: 1fr;
	}
`;

const AuthImage = styled.img`
	width: 100%;
	height: 100%;
	@media ${device.tablet} {
		display: none;
	}
`;

const AuthContent = styled.div`
	display: flex;
	padding: 137px 190px;
`;

const AuthWrapper = ({ children, pageTitle }: AuthProps) => {
	const [imageSrc, setImageSrc] = useState<string>();
	const [imageAlt, setImageAlt] = useState<string>();
	switch (pageTitle) {
		case 'login':
			setImageSrc(LoginImg);
			setImageAlt('login-image');
			break;
		case 'resetPassword':
			setImageSrc(ResetPasswordImg);
			setImageAlt('reset-password-image');
		default:
			break;
	}
	return (
		<AuthWrapperStyled>
			<AuthImage src={imageSrc} alt={imageAlt} />
			<AuthContent>{children}</AuthContent>
		</AuthWrapperStyled>
	);
};

export default AuthWrapper;
