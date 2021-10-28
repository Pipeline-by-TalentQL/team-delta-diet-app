import React, { CSSProperties } from 'react';
import Form, { FormHeader, Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';
import { LoadingButton } from '@atlaskit/button';
import AuthWrapper from '../components/AuthPageWrapper';

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

const ResetPassword = () => {
	return (
		<AuthWrapper pageTitle="resetPassword">
			<div className="reset-password">
				<FormHeader
					title="Password Reset"
					description="Enter your new password"
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
							<UserPasswordField />
							<UserPasswordField />
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

export default ResetPassword;
