import React from 'react';
import styled from '@emotion/styled';

interface LoaderProps {
	loaderStateValue?: number;
}

const LoaderContainer = styled.div<LoaderProps>`
	background: rgba(9, 30, 66, 0.13);
	border-radius: 3px;
	height: 6px;
	overflow: hidden;
	position: relative;
	width: 100%;
	display: ${(props) => (props.loaderStateValue ? `block` : 'none')};
`;

const LoaderContent = styled.span<LoaderProps>`
	border-radius: 3px;
	display: block;
	height: 6px;
	position: absolute;
	background: #bf2600;
	transition: width 0.2s;
	width: ${(props) =>
		props.loaderStateValue ? props.loaderStateValue * 100 + '%' : '0'};

	animation: shimmy 2s infinite linear;

	@keyframes shimmy {
		0% {
			transform: translate(0);
		}
		100% {
			transform: translateX(100vw);
		}
	}
`;

export default function Loader({ loaderStateValue }: LoaderProps) {
	return (
		<LoaderContainer loaderStateValue={loaderStateValue}>
			<LoaderContent loaderStateValue={loaderStateValue} />
		</LoaderContainer>
	);
}
