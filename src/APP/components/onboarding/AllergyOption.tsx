import React, { useState } from 'react';
import styled from '@emotion/styled';
import { allergyOptions } from '../../constants/data';
import RoundCheck from '../../assets/icons/round-check.svg';
import { HorizontalScrollWrapper } from './display-components';

interface AllergyOptionActiveProps {
	isSelected?: boolean;
}

const AllergyOption = styled.div<AllergyOptionActiveProps>`
	width: 160px;
	height: 160px;
	padding: 14px;
	border-radius: 12px;
	cursor: pointer;
	position: relative;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 12px;
	background: ${(props) => (props.isSelected ? '#dfe1e6' : 'transparent')};

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

const AllergyOptionActive = styled.div<AllergyOptionActiveProps>`
	color: #00875a;
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

export default function AllergyOptions() {
	const [allergys, setAllergys] = useState(allergyOptions);
	function toggleAllergySelect(title: string, selectedState: boolean) {
		const updateAllergys = [...allergys];
		const allergyIndex = updateAllergys.findIndex(
			(allergy) => allergy.title === title,
		);
		updateAllergys[allergyIndex].isSelected = !selectedState;
		setAllergys(updateAllergys);
	}
	return (
		<>
			<h1>Do you have any food allergies?</h1>
			<HorizontalScrollWrapper>
				{allergyOptions.map(({ title, image, isSelected }) => (
					<AllergyOption
						key={title}
						isSelected={isSelected}
						onClick={() => toggleAllergySelect(title, isSelected)}
					>
						<AllergyOptionActive isSelected={isSelected}>
							<RoundCheck />
						</AllergyOptionActive>
						<img src={image} alt={title} />
						<p>{title}</p>
					</AllergyOption>
				))}
			</HorizontalScrollWrapper>
		</>
	);
}
