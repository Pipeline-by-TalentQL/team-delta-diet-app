import React, { CSSProperties } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react';
import Form, { FormHeader } from '@atlaskit/form';
import { LoadingButton } from '@atlaskit/button';
import { Link } from 'react-router-dom';
import Input from '../components/InputField';
import AuthWrapper from '../components/AuthPageWrapper';
import Spacer from '../components/Spacer';

const formButtonStyles: CSSProperties = {
	height: 'auto',
	width: '100%',
	padding: '4px 0',
	margin: '25px 0',
};

const FooterDiv = () => {
	return (
		<div css={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
			<p>Already have an account</p>
			<Link
				css={{ color: '#0747A6', display: 'flex', alignItems: 'center' }}
				to="/app/login"
			>
				Login
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

const ForgotPassword = () => {
	return (
		<AuthWrapper pageTitle="forgotPassword">
			<div className="forgot-password">
				<FormHeader
					title="Forgot Password"
					description="Enter your email to recover your password"
				/>
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
							<Spacer size={30} />
							<Input
								name="Email"
								label="Email"
								placeholder="example@mail.com"
								type="email"
								isRequired
							/>
							<LoadingButton
								style={formButtonStyles}
								type="submit"
								appearance="primary"
								isLoading={submitting}
							>
								Recover Password
							</LoadingButton>
						</form>
					)}
				</Form>
				<FooterDiv />
			</div>
		</AuthWrapper>
	);
};

export default ForgotPassword;
