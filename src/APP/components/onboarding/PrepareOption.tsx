import React from 'react';
import { preparationOptions } from '../../constants/data';
import { HorizontalScrollWrapper, Option } from './display-components';

export default function PrepareOptions() {
	return (
		<>
			<h1>How do you prapare food?</h1>
			<HorizontalScrollWrapper>
				{preparationOptions.map(({ title, image, description }) => (
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
