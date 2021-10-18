import React, { useState } from 'react';
import './meal-accordion.scss';
import Breakfast from '../../assets/svgs/break.svg';
import Lunch from '../../assets/svgs/lunch.svg';
import Dinner from '../../assets/svgs/dinner.svg';
import Drinks from '../../assets/svgs/drink.svg';

import { mealsList } from '../../constants/meals';

type TabHeaderType = {
	id: string;
	title: string;
	name: string;
	SvgElement: string;
};

const tabsHeader: TabHeaderType[] = [
	{
		id: 'breakfast',
		title: 'breakfast',
		name: 'tab-effect-1',
		SvgElement: Breakfast,
	},
	{
		id: 'lunch',
		title: 'lunch',
		name: 'tab-effect-1',
		SvgElement: Lunch,
	},
	{
		id: 'dinner',
		title: 'dinner',
		name: 'tab-effect-1',
		SvgElement: Dinner,
	},
	{
		id: 'drinks',
		title: 'drinks',
		name: 'tab-effect-1',
		SvgElement: Drinks,
	},
];

const MealAccordion = () => {
	const [selectedTab, setSelectedTab] = useState(tabsHeader[0].id);

	return (
		<div className="meal-accordion">
			<div className="tabs">
				{tabsHeader.map(({ id, title, name, SvgElement }) => (
					<div className="tab" key={id}>
						<input
							className="tab__option"
							type="radio"
							id={id}
							name={name}
							value={id}
							checked={selectedTab === id}
							onChange={() => setSelectedTab(id)}
						/>
						<span className="tab__name">
							<SvgElement />
							{title}
						</span>
					</div>
				))}
			</div>

			{/* tab-content */}
			<TabContent
				tabs={tabsHeader}
				selectedTab={selectedTab}
				setSelectedTab={setSelectedTab}
			/>
		</div>
	);
};

export default MealAccordion;

type TabContentProps = {
	tabs: TabHeaderType[];
	selectedTab: string;
	setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabContent = ({ tabs, selectedTab, setSelectedTab }: TabContentProps) => {
	return (
		<div className="tab-content">
			<div className="tab-content__header">
				<h2>{tabs.find((tab) => tab.id === selectedTab)?.title} Collection</h2>
				<div className="navigation">
					<div
						className={`navigation__left ${
							tabs.findIndex((tab) => tab.id === selectedTab) === 0
								? 'disabled'
								: ''
						}`}
						onClick={() =>
							setSelectedTab(
								tabs[tabs.findIndex((tab) => tab.id === selectedTab) - 1].id,
							)
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</div>
					<div
						className={`navigation__right ${
							tabs.findIndex((tab) => tab.id === selectedTab) ===
							tabs.length - 1
								? 'disabled'
								: ''
						}`}
						onClick={() =>
							setSelectedTab(
								tabs[tabs.findIndex((tab) => tab.id === selectedTab) + 1].id,
							)
						}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className="tab-content__body">
				{mealsList
					.find((mealType) => mealType.category === selectedTab)
					?.meals.map((meals) => (
						<TabCard {...meals} key={meals.name} />
					))}
			</div>
		</div>
	);
};

export type CardProps = {
	name: string;
	calories: number;
	fat: number;
	protein: number;
	image: string;
};

const TabCard = ({ name, calories, fat, protein, image }: CardProps) => {
	return (
		<div className="tab-card">
			<div className="tab-card__image-container">
				<img src={image} alt={name} />
			</div>

			<div className="tab-card__detail">
				<h3 className="tab-card__title">{name}</h3>

				<div className="tab-card__info">
					<div className="single-info">
						<h5>Calories</h5>
						<p>{calories}kCal</p>
					</div>
					<div className="divide" />
					<div className="single-info">
						<h5>Fat</h5>
						<p>{fat}</p>
					</div>
					<div className="divide" />
					<div className="single-info">
						<h5>Protein</h5>
						<p>{protein}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
