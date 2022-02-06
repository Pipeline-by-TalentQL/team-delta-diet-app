import React from 'react';
import styled from '@emotion/styled';

import RoundCheck from '../assets/icons/round-check.svg';
import Like from '../assets/icons/like.svg';
import Share from '../assets/icons/share.svg';
import Socials from './dashboard/Socials';

const MealCardWrapper = styled.div`
	width: 255px;
	border-radius: 6px;

	&:hover {
		.overlay {
			opacity: 1;
		}

		.socials-container {
			display: block;
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

	.socials-container {
		position: absolute;
		display: none;
		top: 12px;
		right: 12px;
	}
`;

const MealCardContent = styled.div`
	width: 100%;
	border-radius: 0px 0px 6px 6px;
	background: white;

	article {
		padding: 12px;

		h3 {
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

interface MealCardProps {
	mealImg: string;
	mealName: string;
	cookTime: number;
	likes: number;
	shares: number;
	userAvatar: string;
	userName: string;
}

export default function MealCard({
	mealImg,
	mealName,
	cookTime,
	likes,
	shares,
	userAvatar,
	userName,
}: MealCardProps) {
	return (
		<MealCardWrapper>
			<ImageContainer className="image-container">
				<img src={mealImg} alt="mug" />
				<div className="overlay" />
				<div className="socials-container">
					<Socials />
				</div>
			</ImageContainer>
			<MealCardContent>
				<article>
					<h3>{mealName}</h3>
					<p>Cook in {cookTime} Minutes</p>
				</article>
				<Divider />
				<MealCardFooter>
					<MealCardFooterUser>
						<img src={userAvatar} alt="AvatarImg" />
						<p>{userName}</p>
						<RoundCheck />
					</MealCardFooterUser>
					<MealCardFooterAction>
						<div>
							<Like />
							<span> {likes}k</span>
						</div>
						<div>
							<Share />
							<span> {shares}k</span>
						</div>
					</MealCardFooterAction>
				</MealCardFooter>
			</MealCardContent>
		</MealCardWrapper>
	);
}
