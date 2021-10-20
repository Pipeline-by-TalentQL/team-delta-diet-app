import React, { PropsWithChildren } from 'react';
import classNames from 'classnames/bind';
import { Button } from 'react-bootstrap';
import styles from './customButton.module.css';

type CustomButtonProps = PropsWithChildren<{
	size?: 'sm' | 'lg';
	variant?:
		| 'primary'
		| 'outline-primary'
		| 'secondary'
		| 'outline-secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'info';
	type?: 'submit' | 'button';
}>;

let cx = classNames.bind(styles);

const CustomButton = ({
	size = undefined,
	variant = 'primary',
	type = 'button',
	children,
	...otherProps
}: CustomButtonProps) => {
	var btnClass = cx({
		customButtonSm: size === 'sm',
		customButtonMd: size === undefined,
		customButtonLg: size === 'lg',
	});

	return (
		<Button
			variant={variant}
			size={size}
			type={type}
			{...otherProps}
			className={btnClass}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
