import React from 'react';
import { FormHeader } from '@atlaskit/form';
import AuthWrapper from '../components/AuthPageWrapper';

const ResetPassword = () => {
	return (
		<AuthWrapper pageTitle="resetPassword">
			<div className="reset-password">
				<FormHeader title="Login" />
			</div>
		</AuthWrapper>
	);
};

export default ResetPassword;
