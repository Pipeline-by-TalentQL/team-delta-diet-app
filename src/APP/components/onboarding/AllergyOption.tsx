import React from 'react';
import styled from '@emotion/styled';
import { allergyOptions } from '../../constants/data';
import { HorizontalScrollWrapper } from './display-components';

const AllergyOption = styled.div`
	width: 160px;
	height: 160px;
	padding: 14px;
	border-radius: 12px;
	cursor: pointer;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;

	&:hover {
		background: #dfe1e6;
	}

	p {
		font-size: 20px;
		line-height: 24px;
		text-align: center;
		color: #344563;
		text-transform: capitalize;
	}
`;

export default function AllergyOptions() {
	return (
		<>
			<h1>Do you have any food allergies?</h1>
			<HorizontalScrollWrapper>
				{allergyOptions.map(({ title, image }) => (
					<AllergyOption key={title}>
						<img src={image} alt={title} />
						<p>{title}</p>
					</AllergyOption>
				))}
			</HorizontalScrollWrapper>
		</>
	);
}
