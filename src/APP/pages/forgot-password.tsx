import React, { CSSProperties } from 'react';
import Form, { FormHeader, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { LoadingButton } from '@atlaskit/button';
import AuthWrapper from '../components/AuthPageWrapper';
import Spacer from '../components/Spacer';

const formButtonStyles: CSSProperties = {
	height: 'auto',
	width: '100%',
	padding: '4px 0',
	margin: '25px 0',
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
							<UserPasswordField />
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
			</div>
		</AuthWrapper>
	);
};

export default ForgotPassword;
