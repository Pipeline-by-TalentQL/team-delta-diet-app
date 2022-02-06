import React from 'react';
import styled from '@emotion/styled';

import Mug from '../assets/images/banana.png';
import AvatarImg from '../assets/images/avatar.png';

import RoundCheck from '../assets/icons/round-check.svg';
import Like from '../assets/icons/like.svg';
import Share from '../assets/icons/share.svg';

const MealCardWrapper = styled.div`
	width: 255px;
	border-radius: 6px;

	&:hover {
		.overlay {
			opacity: 1;
		}
	}
`;

const ImageContainer = styled.div`
	position: relative;
	.overlay {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.19), rgba(0, 0, 0, 0.19));
		position: absolute;
		height: 99%;
		width: 100%;
		left: 0;
		top: 0;
		bottom: 0;
		right: 0;
		opacity: 0;
		transition: all 0.4s ease-in-out 0s;
	}
`;

const MealCardContent = styled.div`
	width: 100%;
	border-radius: 0px 0px 6px 6px;
	background: white;

	article {
		padding: 12px;

		h3 {
			width: 138px;
			font-size: 20px;
			line-height: 24px;
			color: #253858;
			margin-bottom: 1rem;
		}

		p {
			font-size: 11px;
			line-height: 20px;
			color: #b3bac5;
		}
	}
`;

const MealCardFooter = styled.section`
	display: flex;
	justify-content: space-between;
	color: rgba(9, 30, 66, 0.54);

	img {
		width: 16px;
		height: 16px;
	}

	padding: 12px;
`;

const MealCardFooterUser = styled.div`
	display: flex;
	align-items: center;
	gap: 3px;
	svg {
		color: #4c9aff;
	}
`;

const MealCardFooterAction = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
	color: rgba(9, 30, 66, 0.36);

	svg {
		margin-right: 3px;
	}

	span {
		font-size: 10px;
		line-height: 14px;
	}
`;

const Divider = styled.div`
	height: 2px;
	background: rgba(9, 30, 66, 0.08);
	border-radius: 1px;
`;

export default function MealCard() {
	return (
		<MealCardWrapper>
			<ImageContainer className="image-container">
				<img src={Mug} alt="mug" />
				<div className="overlay" />
			</ImageContainer>
			<MealCardContent>
				<article>
					<h3>Chocolate cake muffins</h3>
					<p>Cook in 10 Minutes</p>
				</article>
				<Divider />
				<MealCardFooter>
					<MealCardFooterUser>
						<img src={AvatarImg} alt="AvatarImg" />
						<p>ubu_oko</p>
						<RoundCheck />
					</MealCardFooterUser>
					<MealCardFooterAction>
						<div>
							<Like />
							<span> 65k</span>
						</div>
						<div>
							<Share />
							<span> 6k</span>
						</div>
					</MealCardFooterAction>
				</MealCardFooter>
			</MealCardContent>
		</MealCardWrapper>
	);
}
