import React, { useState } from 'react';
import { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';

type InputProps = {
	name: string;
	label?: string;
	type: string;
	defaultValue?: any;
	placeholder?: string;
	isRequired?: boolean;
};

const Input = ({
	name,
	type,
	defaultValue,
	label,
	placeholder,
	isRequired,
}: InputProps) => {
	const [value] = useState(defaultValue);

	return (
		<>
			<Field
				aria-required
				name={name}
				defaultValue={value}
				label={label}
				isRequired={isRequired}
			>
				{({ fieldProps }) => (
					<TextField placeholder={placeholder} type={type} {...fieldProps} />
				)}
			</Field>
		</>
	);
};

export default Input;
