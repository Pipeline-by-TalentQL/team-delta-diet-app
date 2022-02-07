/** @jsx jsx */
import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css, jsx } from '@emotion/react';

import Tabs, { Tab, TabList, useTabPanel } from '@atlaskit/tabs';
import { meals } from '../../constants/data';
import MealCard from '../MealCard';

const customPanelStyles = css({
	margin: `28px 0`,
	// overflowX: 'auto',
});

const CustomTabPanel = ({ children }: PropsWithChildren<{}>) => {
	const tabPanelAttributes = useTabPanel();
	return (
		<div css={customPanelStyles} {...tabPanelAttributes}>
			{children}
		</div>
	);
};

const MealsFlexCard = styled.div`
	display: flex;
	gap: 2rem;
	flex-wrap: wrap;
`;

const MealsTimeLine = () => (
	<Tabs id="custom-panel">
		<TabList>
			<Tab>Break Fast</Tab>
			<Tab>Lunch</Tab>
			<Tab>Dinner</Tab>
		</TabList>
		<CustomTabPanel>
			<MealsFlexCard>
				{meals.map((meal) => (
					<MealCard key={meal.mealName} {...meal} />
				))}
				{meals.reverse().map((meal) => (
					<MealCard key={meal.mealName} {...meal} />
				))}
			</MealsFlexCard>
		</CustomTabPanel>
		<CustomTabPanel>
			<p>two</p>
		</CustomTabPanel>
		<CustomTabPanel>
			<MealsFlexCard>
				{meals.map((meal) => (
					<MealCard key={meal.mealName} {...meal} />
				))}
				{meals.reverse().map((meal) => (
					<MealCard key={meal.mealName} {...meal} />
				))}
			</MealsFlexCard>
		</CustomTabPanel>
	</Tabs>
);

export default MealsTimeLine;
