import React from 'react';
import styled from '@emotion/styled';
import { cuisinesImages } from '../../constants/file-links';

const HorizontalScrollWrapper = styled.div`
	display: flex;
	gap: 30px;
	overflow-x: scroll;
`;

const CuisineOption = styled.div`
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
`;

export default function CuisineOptions() {
	return (
		<>
			<h1>Select your favorite cuisines</h1>
			<HorizontalScrollWrapper>
				<CuisineOption>
					<img src={cuisinesImages.nigerian} alt="nigerian" />
					<p>Nigerian</p>
				</CuisineOption>
				<CuisineOption>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</CuisineOption>
				<CuisineOption>
					<img src={cuisinesImages.french} alt="french" />
					<p>French</p>
				</CuisineOption>
				<CuisineOption>
					<img src={cuisinesImages.asian} alt="asian" />
					<p>Asian</p>
				</CuisineOption>
				<CuisineOption>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</CuisineOption>
				<CuisineOption>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</CuisineOption>
				<CuisineOption>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</CuisineOption>
				<CuisineOption>
					<img src={cuisinesImages.american} alt="american" />
					<p>American</p>
				</CuisineOption>
			</HorizontalScrollWrapper>
		</>
	);
}
