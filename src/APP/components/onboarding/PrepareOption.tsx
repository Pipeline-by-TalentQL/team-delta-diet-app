import React, { useState } from 'react';
import { preparationOptions } from '../../constants/data';
import { HorizontalScrollWrapper, Option } from './display-components';

export default function PrepareOptions() {
	const [preparations, setpreparations] = useState(preparationOptions);
	function togglepreparationselect(title: string, selectedState: boolean) {
		const updatepreparations = [...preparations];
		const preparationsIndex = updatepreparations.findIndex(
			(prep) => prep.title === title,
		);
		updatepreparations[preparationsIndex].isSelected = !selectedState;
		setpreparations(updatepreparations);
	}
	return (
		<>
			<h1>How do you prapare food?</h1>
			<HorizontalScrollWrapper centered>
				{preparations.map(({ title, image, description, isSelected }) => (
					<Option
						key={title}
						isSelected={isSelected}
						onClick={() => togglepreparationselect(title, isSelected)}
					>
						<img src={image} alt="nigerian" />
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
