import React from 'react';
import styled from '@emotion/styled';

import Socials from './Socials';
import RecipeOfTheDay from './RecipeOfTheDay';

const HeroContainer = styled.div`
	position: relative;
	margin-bottom: 40px;

	.socials-container {
		position: absolute;
		top: 30px;
		right: 45px;
	}
`;

export default function DashHero() {
	return (
		<HeroContainer>
			<img
				src="https://res.cloudinary.com/sambayo/image/upload/v1644148848/tomato-shrimp_c1co6u.png"
				alt="shrimp"
			/>
			<RecipeOfTheDay />
			<div className="socials-container">
				<Socials />
			</div>
		</HeroContainer>
	);
}
