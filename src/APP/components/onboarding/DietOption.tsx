import React from 'react';
import { dietsOptions } from '../../constants/data';
import { HorizontalScrollWrapper, Option } from './display-components';

export default function DietOptions() {
	return (
		<>
			<h1>Which of these diets do you follow?</h1>
			<HorizontalScrollWrapper>
				{dietsOptions.map(({ title, image, description }) => (
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
