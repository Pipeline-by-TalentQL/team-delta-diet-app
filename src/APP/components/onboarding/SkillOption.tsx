import React, { useState } from 'react';
import { skillOptions } from '../../constants/data';
import { HorizontalScrollWrapper, Option } from './display-components';

export default function SkillOptions() {
	const [skills, setskills] = useState(skillOptions);
	function toggleSkillSelect(title: string, selectedState: boolean) {
		const updateskills = [...skills];
		const skillIndex = updateskills.findIndex(
			(cusine) => cusine.title === title,
		);
		updateskills[skillIndex].isSelected = !selectedState;
		setskills(updateskills);
	}
	return (
		<>
			<h1>Describe your cooking skills</h1>
			<HorizontalScrollWrapper centered>
				{skills.map(({ title, image, description, isSelected }) => (
					<Option
						key={title}
						isSelected={isSelected}
						onClick={() => toggleSkillSelect(title, isSelected)}
					>
						<img src={image} alt={title} />
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
