import React from 'react';
import { skillOptions } from '../../constants/data';
import { HorizontalScrollWrapper, Option } from './display-components';

export default function SkillOptions() {
	return (
		<>
			<h1>Describe your cooking skills</h1>
			<HorizontalScrollWrapper centered>
				{skillOptions.map(({ title, image, description }) => (
					<Option key={title}>
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
