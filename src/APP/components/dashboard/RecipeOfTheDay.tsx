import React from 'react';
import styled from '@emotion/styled';

const RecipeOfTheDayWrapper = styled.div`
	position: absolute;
	left: 30px;
	top: 30px;
	color: white;
`;

const RecipeOfTheDayHeader = styled.div`
	background: #dfe1e6;
	border-radius: 3px;
	font-size: 14px;
	line-height: 20px;
	color: #42526e;
	padding: 4px;
	width: fit-content;
`;

const RecipeDetail = styled.div`
	width: 183px;
	margin-top: 40px;

	h1 {
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
		color: #fafbfc;
	}
`;

const RecipeOfTheDayTags = styled.div`
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin: 8px 0 14px;

	p {
		background: #006644;
		border-radius: 100px;
		padding: 2px 6px;
		font-size: 12px;
		line-height: 14px;
		color: #e3fcef;
	}
`;

const CookTime = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;

	p {
		font-size: 12px;
		line-height: 20px;
		color: #b3bac5;
	}
`;

export default function RecipeOfTheDay() {
	return (
		<RecipeOfTheDayWrapper>
			<RecipeOfTheDayHeader>Recipe of the day</RecipeOfTheDayHeader>
			<RecipeDetail>
				<h1>Tomato, Spinach and Shrimp Pasta</h1>
				<RecipeOfTheDayTags>
					<p>Pescetarian</p>
					<p>Ketogenic</p>
				</RecipeOfTheDayTags>
				<CookTime>
					<img
						src="https://res.cloudinary.com/sambayo/image/upload/v1644258981/cooking_u30eeu.png"
						alt="cook-time"
					/>
					<p>Cook in 10 Minutes</p>
				</CookTime>
			</RecipeDetail>
		</RecipeOfTheDayWrapper>
	);
}
