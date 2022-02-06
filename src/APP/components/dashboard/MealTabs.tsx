/** @jsx jsx */
import React, { PropsWithChildren } from 'react';
import { css, jsx } from '@emotion/react';

import Tabs, { Tab, TabList, useTabPanel } from '@atlaskit/tabs';
import MealCard from '../Meal';

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

const MealsTimeLine = () => (
	<Tabs id="custom-panel">
		<TabList>
			<Tab>Break Fast</Tab>
			<Tab>Lunch</Tab>
			<Tab>Dinner</Tab>
		</TabList>
		<CustomTabPanel>
			<div
				style={{
					display: 'flex',
					gap: '2rem',
					flexWrap: 'wrap',
				}}
			>
				<MealCard />
				<MealCard />
				<MealCard />
				<MealCard />
				<MealCard />
			</div>
		</CustomTabPanel>
		<CustomTabPanel>
			<p>two</p>
		</CustomTabPanel>
		<CustomTabPanel>
			<p>three</p>
		</CustomTabPanel>
	</Tabs>
);

export default MealsTimeLine;
