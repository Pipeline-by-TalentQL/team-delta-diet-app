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

const UserEmailField = () => {
	return (
		<>
			<Field
				aria-required
				name="email"
				defaultValue=""
				label="Email"
				isRequired
			>
				{({ fieldProps }) => (
					<TextField
						placeholder="example@gmail.com"
						type="email"
						{...fieldProps}
					/>
				)}
				{/* <svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
					/>
				</svg> */}
			</Field>
		</>
	);
};
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
		<div
			className="extra-options"
			css={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
			}}
		>
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
						Sign in with Google
					</span>
				</Button>
				<TextBetweenLines text="or Sign in with email" />
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

export default SignUp;
