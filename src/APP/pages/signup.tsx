import React, { CSSProperties } from 'react';
import Form, { FormHeader } from '@atlaskit/form';
import Button, { LoadingButton } from '@atlaskit/button';
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import GoogleIcon from '../assets/images/google-icon.svg';

import Input from '../components/InputField';
import AuthWrapper from '../components/AuthPageWrapper';
import Spacer from '../components/Spacer';
import TextBetweenLines from '../components/TextBetweenLines';

const formButtonStyles: CSSProperties = {
	height: 'auto',
	width: '100%',
	padding: '4px 0',
	margin: '25px 0',
};

const googleButtonStyle: CSSProperties = {
	background: 'white',
	border: '#0052CC solid 2px',
	padding: '3px 0',
	height: 'auto',
	margin: '25px 0 40px',
	borderRadius: '8px',
};

const FooterDiv = () => {
	return (
		<div css={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
			<p>Not yet registered?</p>
			<Link
				css={{ color: '#0747A6', display: 'flex', alignItems: 'center' }}
				to="/app/login"
			>
				Already have an account
				<svg
					css={{ width: '20px', marginLeft: '8px' }}
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			</Link>
		</div>
	);
};

const SignUp = () => {
	return (
		<AuthWrapper pageTitle="signup">
			<div className="signup">
				<FormHeader title="Registration" />
				<Button
					appearance="default"
					shouldFitContainer
					style={googleButtonStyle}
				>
					<div
						css={{
							verticalAlign: 'sub',
							display: 'inline-flex',
							marginRight: '10px',
						}}
					>
						<GoogleIcon />
					</div>
					<span css={{ color: '#0747A6', fontSize: '16px' }}>
						Sign up with Google
					</span>
				</Button>
				<TextBetweenLines text="or Sign up with email" />
				<Spacer size={28} />
				<Form<{ email: string; password: string }>
					onSubmit={(data) => {
						console.log('form data', data);
						return new Promise((resolve) => setTimeout(resolve, 2000)).then(
							() => (data.email === 'error' ? { email: 'IN_USE' } : undefined),
						);
					}}
				>
					{({ formProps, submitting }) => (
						<form {...formProps}>
							<Input
								name="fullName"
								label="Fullname"
								placeholder="Obika Nzube"
								type="text"
								isRequired
							/>
							<Spacer size={20} />
							<Input
								name="Email"
								label="Email"
								placeholder="example@mail.com"
								type="email"
								isRequired
							/>
							<Spacer size={20} />
							<Input
								name="Password"
								label="Password"
								placeholder="6+ Strong Characters"
								type="password"
								isRequired
							/>
							<Spacer size={12} />

							<LoadingButton
								style={formButtonStyles}
								type="submit"
								appearance="primary"
								isLoading={submitting}
							>
								Register
							</LoadingButton>
						</form>
					)}
				</Form>
				<FooterDiv />
			</div>
		</AuthWrapper>
	);
};

export default SignUp;
