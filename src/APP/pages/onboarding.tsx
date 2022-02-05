import React, { useState } from 'react';
import styled from '@emotion/styled';
import ChevronLeft from '../assets/icons/chevron-left.svg';
import ChevronRight from '../assets/icons/chevron-right.svg';
import CuisineOptions from '../components/onboarding/CuisineOption';

const OnboardContentWrapper = styled.section`
	margin: 60px 0 40px;

	h1 {
		text-align: center;
		margin-bottom: 48px;
		font-weight: 500;
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
		default:
			return <p>empty right now</p>;
	}
};

export default function Onboarding() {
	const [onboardingState, setOnboardingState] = useState<number>(0);
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
