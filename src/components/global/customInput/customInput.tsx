import React from 'react';
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './customInput.module.css';

interface CustomInputProps {
	type: string;
	inputType: 'normal' | 'group';
	placeholder?: string;
	label?: string;
	text?: string;
	size?: 'sm' | 'lg';
	border?: 'primary';
	children?: React.ReactNode;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

let cx = classNames.bind(styles);

const CustomInput = ({
	label,
	type,
	placeholder,
	text,
	border,
	size = undefined,
	inputType,
	children,
	onChange,
	...otherProps
}: CustomInputProps) => {
	var inputClass = cx({
		customInput: true,
		customInputsm: size === 'sm',
		customInputmd: size === undefined,
		customInputlg: size === 'lg',
		borderPrimary: border === 'primary',
	});
	switch (inputType) {
		case 'normal':
			return (
				<Form.Group className="mb-3">
					{label ? <Form.Label>{label}</Form.Label> : ''}
					<Form.Control
						type={type}
						size={size}
						className={inputClass}
						placeholder={placeholder}
						{...otherProps}
						onChange={onChange}
					/>
					{text ? <Form.Text className="text-muted">{text}</Form.Text> : ''}
				</Form.Group>
			);
		case 'group':
			return (
				<InputGroup className="mb-3">
					<FormControl
						size={size}
						className={inputClass}
						placeholder={placeholder}
						aria-label={placeholder}
						onChange={onChange}
					/>
					{children}
				</InputGroup>
			);
		default:
			return (
				<Form.Control
					type={type}
					size={size}
					className={inputClass}
					placeholder={placeholder}
					{...otherProps}
					onChange={onChange}
				/>
			);
	}
};

export default CustomInput;
