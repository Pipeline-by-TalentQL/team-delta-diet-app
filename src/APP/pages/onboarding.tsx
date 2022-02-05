import styled from '@emotion/styled';
import React from 'react';
import { cuisinesImages } from '../constants/file-links';

const OnboardContentWrapper = styled.section`
	margin: 60px 0 40px;

	h1 {
		text-align: center;
		margin-bottom: 48px;
		font-weight: 500;
	}
`;

const HorizontalScrollWrapper = styled.div`
	display: flex;
	gap: 30px;
	overflow-x: scroll;

	div {
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 98%;
			border-radius: 10px;
			background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.24) 0%,
				rgba(0, 0, 0, 0.08) 41.67%,
				rgba(0, 0, 0, 0.38) 78.12%,
				rgba(0, 0, 0, 0.81) 100%
			);
		}
		p {
			position: absolute;
			bottom: 10px;
			font-weight: 500;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			color: #f4f5f7;
			width: 100%;
			left: 0;
		}
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

export default function Onboarding() {
	return (
		<>
			<SelectFavCuisines />

			<div style={{ textAlign: 'center' }}>
				<BackButton>Back</BackButton>
				<NextButton>Next</NextButton>
			</div>
		</>
	);
}

function SelectFavCuisines() {
	return (
		<OnboardContentWrapper>
			<h1>Select your favorite cuisines</h1>
			<HorizontalScrollWrapper>
				<div>
					<img src={cuisinesImages.nigerian} alt="nigerian" />
					<p>Nigerian</p>
				</div>
				<div>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</div>
				<div>
					<img src={cuisinesImages.french} alt="french" />
					<p>French</p>
				</div>
				<div>
					<img src={cuisinesImages.asian} alt="asian" />
					<p>Asian</p>
				</div>
				<div>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</div>
				<div>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</div>
				<div>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</div>
				<div>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</div>
			</HorizontalScrollWrapper>
		</OnboardContentWrapper>
	);
}
