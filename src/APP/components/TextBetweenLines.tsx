import React from 'react';
import styled from '@emotion/styled';

interface Props {
	text: string;
}

const Text = styled.div`
	display: grid;
	grid-template-columns: 1fr max-content 1fr;
	grid-column-gap: 1rem;
	align-items: center;
	color: #848ea0;

	&:after,
	&:before {
		content: '';
		display: block;
		height: 1px;
		color: #848ea0;
		background-color: currentColor;
	}
`;
const TextBetweenLines = ({ text }: Props) => <Text>{text}</Text>;

export default TextBetweenLines;
