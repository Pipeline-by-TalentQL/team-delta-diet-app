import React, { useState } from 'react';
import styled from '@emotion/styled';
import { cuisineOptions } from '../../constants/data';
import RoundCheck from '../../assets/icons/round-check.svg';
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

interface CuisineOptionActiveProps {
	isSelected?: boolean;
}
const CuisineOptionActive = styled.div<CuisineOptionActiveProps>`
	color: rgba(255, 255, 255);
	position: absolute;
	opacity: ${(props) => (props.isSelected ? '1' : '0')};
	transition: opacity 0.5s;
	top: 6px;
	left: 6px;

	svg {
		width: 20px;
		height: 20px;
	}
`;

export default function CuisineOptions() {
	const [cusines, setCusines] = useState(cuisineOptions);
	function toggleCuisineSelect(title: string, selectedState: boolean) {
		const updateCusines = [...cusines];
		const cusineIndex = updateCusines.findIndex(
			(cusine) => cusine.title === title,
		);
		updateCusines[cusineIndex].isSelected = !selectedState;
		setCusines(updateCusines);
	}
	return (
		<>
			<h1>Select your favorite cuisines</h1>
			<HorizontalScrollWrapper>
				{cusines.map(({ title, image, isSelected }) => (
					<CuisineOption
						key={title}
						onClick={() => toggleCuisineSelect(title, isSelected)}
					>
						<CuisineOptionActive isSelected={isSelected}>
							<RoundCheck />
						</CuisineOptionActive>
						<img src={image} alt={title} loading="lazy" />
						<p>{title}</p>
					</CuisineOption>
				))}
			</HorizontalScrollWrapper>
		</>
	);
}
