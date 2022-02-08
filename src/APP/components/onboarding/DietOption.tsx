import React, { useState } from 'react';
import { dietsOptions } from '../../constants/data';
import { HorizontalScrollWrapper, Option } from './display-components';

export default function DietOptions() {
	const [diets, setDiets] = useState(dietsOptions);
	function toggleDietSelect(title: string, selectedState: boolean) {
		const updateDiets = [...diets];
		const dietIndex = updateDiets.findIndex((diet) => diet.title === title);
		updateDiets[dietIndex].isSelected = !selectedState;
		setDiets(updateDiets);
	}
	return (
		<>
			<h1>Which of these diets do you follow?</h1>
			<HorizontalScrollWrapper>
				{diets.map(({ title, image, description, isSelected }) => (
					<Option
						key={title}
						isSelected={isSelected}
						onClick={() => toggleDietSelect(title, isSelected)}
					>
						<img src={image} alt="nigerian" loading="lazy" />
						<div>
							<h3>{title}</h3>
							<p>{description}</p>
						</div>
					</Option>
				))}
			</HorizontalScrollWrapper>
		</>
	);
}
