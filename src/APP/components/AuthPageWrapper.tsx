import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { device } from '../constants/device-sizes';
import { cloudinaryImages } from '../constants/file-links';

interface DefaultImageProps {
	imageSrc?: string;
	imageAlt?: string;
	pageTitle: string;
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

	a {
		font-weight: 600;
		font-size: 12px;
		line-height: 16px;
		text-decoration: none;
		color: #0747a6;
	}
`;

const AuthImage = styled.img`
	width: 100%;
	height: 100%;
	@media ${device.tablet} {
		display: none;
	}
`;

const AuthContentWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const AuthContent = styled.div`
	width: 340px;
	margin: 0 auto;
`;

const AuthWrapper = ({ children, pageTitle }: AuthProps) => {
	const { loginImage, forgotPasswordImage } = cloudinaryImages;
	switch (pageTitle) {
		// case 'login':
		// 	return (
		// 		<AuthWrapperStyled>
		// 			<AuthImage src={LoginImg} alt="login-image" />
		// 			<AuthContent>{children}</AuthContent>
		// 		</AuthWrapperStyled>
		// 	);
		case 'resetPassword':
			return (
				<AuthWrapperStyled>
					<AuthImage src={forgotPasswordImage} alt="resetpassword-image" />
					<AuthContentWrapper>
						<AuthContent>{children}</AuthContent>
					</AuthContentWrapper>
				</AuthWrapperStyled>
			);
		default:
			return (
				<AuthWrapperStyled>
					<AuthImage src={loginImage} alt="login-image" />
					<AuthContentWrapper>
						<AuthContent>{children}</AuthContent>
					</AuthContentWrapper>
				</AuthWrapperStyled>
			);
	}
};

export default AuthWrapper;
