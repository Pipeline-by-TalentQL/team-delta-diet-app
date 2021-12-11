import React, { CSSProperties } from 'react';
import Form, { FormHeader, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import Button, { LoadingButton } from '@atlaskit/button';
import { Checkbox } from '@atlaskit/checkbox';
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import AuthWrapper from '../components/AuthPageWrapper';
import GoogleIcon from '../assets/images/google-icon.svg';
import Spacer from '../components/Spacer';

const formButtonStyles: CSSProperties = {
	height: 'auto',
	width: '100%',
	padding: '4px 0',
	margin: '25px 0',
};

const googleButtonStyle: CSSProperties = {
	background: 'white',
	width: '100%',
	border: '#0052CC solid 2px',
	padding: '3px 0',
	height: 'auto',
	margin: '25px 0 40px',
	borderRadius: '8px',
};

const UserEmailField = () => (
	<Field aria-required name="email" defaultValue="" label="Email" isRequired>
		{({ fieldProps }) => (
			<TextField placeholder="example@gmail.com" type="email" {...fieldProps} />
		)}
	</Field>
);
const UserPasswordField = () => (
	<Field
		aria-required
		name="password"
		defaultValue=""
		label="Password"
		isRequired
	>
		{({ fieldProps }) => (
			<TextField
				placeholder="6+ Strong Characters"
				type="password"
				{...fieldProps}
			/>
		)}
	</Field>
);

const InlineFormDiv = () => {
	return (
		<div className="extra-options">
			<Checkbox
				value="default checkbox"
				label="Remember me"
				onChange={() => {}}
				name="checkbox-default"
				testId="cb-default"
			/>
			<Link to="/app/reset-password">Forgot Password?</Link>
		</div>
	);
};

const Login = () => {
	return (
		<AuthWrapper pageTitle="login">
			<div className="login">
				<FormHeader title="Login" />
				<Button appearance="default" style={googleButtonStyle}>
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
						Sign in with Google
					</span>
				</Button>
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
							<UserEmailField />
							<Spacer size={25} />
							<UserPasswordField />
							<Spacer size={12} />
							<InlineFormDiv />
							<LoadingButton
								style={formButtonStyles}
								type="submit"
								appearance="primary"
								isLoading={submitting}
							>
								Submit
							</LoadingButton>
						</form>
					)}
				</Form>
			</div>
		</AuthWrapper>
	);
};

export default Login;
