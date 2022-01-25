import React, { CSSProperties } from 'react';
import Form, { FormHeader } from '@atlaskit/form';
import { LoadingButton } from '@atlaskit/button';
import AuthWrapper from '../components/AuthPageWrapper';
import Input from '../components/InputField';
import Spacer from '../components/Spacer';

const formButtonStyles: CSSProperties = {
	height: 'auto',
	width: '100%',
	padding: '4px 0',
	margin: '25px 0',
};

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
							<Spacer size={12} />
							<Input
								name="Password"
								label="Password"
								placeholder="6+ Strong Characters"
								type="password"
								isRequired
							/>
							<Spacer size={12} />
							<Input
								name="Confirm New Password"
								label="confirmPassword"
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
								Reset Password
							</LoadingButton>
						</form>
					)}
				</Form>
			</div>
		</AuthWrapper>
	);
};

export default ResetPassword;
