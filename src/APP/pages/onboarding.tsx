import React, { useState } from 'react';
import styled from '@emotion/styled';
import ChevronLeft from '../assets/icons/chevron-left.svg';
import ChevronRight from '../assets/icons/chevron-right.svg';

import CuisineOptions from '../components/onboarding/CuisineOption';
import DietOptions from '../components/onboarding/DietOption';
import PrepareOptions from '../components/onboarding/PrepareOption';
import SkillOptions from '../components/onboarding/SkillOption';
import AllergyOptions from '../components/onboarding/AllergyOption';
import OnboardingUser from '../components/onboarding/Processing';

const OnboardContentWrapper = styled.section`
	margin: 60px 0 40px;

	h1 {
		text-align: center;
		margin-bottom: 48px;
		font-weight: 500;
	}

	.processing-img {
		text-align: center;
	}
`;

const OnboardButton = styled.button`
	padding: 4px 24px;
	width: 109px;
	height: 40px;
	border-radius: 6px;
	border: 0;
	cursor: pointer;
	font-size: 14px;

	svg {
		height: 15px;
		width: 15px;
		vertical-align: middle;
	}
`;

const BackButton = styled(OnboardButton)`
	background: #ebecf0;
	margin-right: 10px;
`;

const NextButton = styled(OnboardButton)`
	background: #de350b;
	color: white;
	&:hover {
		background: #ff5630;
	}
`;

interface CurrentOnboardingStateProps {
	currentState: number;
}
const CurrentOnboardingState = ({
	currentState,
}: CurrentOnboardingStateProps) => {
	switch (currentState) {
		case 0:
			return <CuisineOptions />;
		case 1:
			return <DietOptions />;
		case 2:
			return <PrepareOptions />;
		case 3:
			return <SkillOptions />;
		case 4:
			return <AllergyOptions />;
		default:
			return <OnboardingUser />;
	}
};

export default function Onboarding() {
	const [onboardingState, setOnboardingState] = useState<number>(1);
	return (
		<>
			<OnboardContentWrapper>
				<CurrentOnboardingState currentState={onboardingState} />
			</OnboardContentWrapper>

			<div style={{ textAlign: 'center' }}>
				<BackButton onClick={() => setOnboardingState(onboardingState - 1)}>
					<ChevronLeft /> Back
				</BackButton>
				<NextButton onClick={() => setOnboardingState(onboardingState + 1)}>
					Next <ChevronRight />
				</NextButton>
			</div>
		</>
	);
}
