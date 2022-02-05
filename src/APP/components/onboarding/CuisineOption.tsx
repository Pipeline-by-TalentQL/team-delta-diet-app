import React from 'react';
import styled from '@emotion/styled';
import { cuisineOptions } from '../../constants/data';
import { HorizontalScrollWrapper } from './display-components';

const CuisineOption = styled.div`
	position: relative;
	cursor: pointer;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 98%;
		border-radius: 10px;
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0.24) 0%,
			rgba(0, 0, 0, 0.08) 41.67%,
			rgba(0, 0, 0, 0.38) 78.12%,
			rgba(0, 0, 0, 0.81) 100%
		);
	}
	p {
		position: absolute;
		bottom: 10px;
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
		text-align: center;
		color: #f4f5f7;
		width: 100%;
		left: 0;
		text-transform: capitalize;
	}
`;

export default function CuisineOptions() {
	return (
		<>
			<h1>Select your favorite cuisines</h1>
			<HorizontalScrollWrapper>
				{cuisineOptions.map(({ title, image }) => (
					<CuisineOption key={title}>
						<img src={image} alt={title} />
						<p>{title}</p>
					</CuisineOption>
				))}
			</HorizontalScrollWrapper>
		</>
	);
}
