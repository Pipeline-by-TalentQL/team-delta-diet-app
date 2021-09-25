// 1. When all the colors and shapes are selected: “All items:”

// 2. When all the colors and a multiple shapes or all the shapes and multiple colors are selected: “Multiple items:”

// 3. When all the shapes and a single color is selected: “All red items:”

// 4. When all the colors and single shape is selected: “All oval items:”

// 5. When multiple the shapes and a single color is selected: “Multiple red items:”

// 6. When multiple the colors and single shape is selected: “Multiple oval items:”

// 7: When a single color and single shape is selected: “Round oval items:”

describe('sample app works', () => {
	const user = cy;
	beforeEach(() => {
		user.visit('/');
	});

	it('load the app correctly', () => {
		user.findByText('LOGO');
		const logos = user.findAllByText('LOGO');
		logos.should('equal', 2);
	});
	// eslint-disable-next-line jest/no-commented-out-tests
	// it('find counter and click', () => {
	// 	user
	// 		.findByText(/count/i)
	// 		.click()
	// 		.should('contain', '1')
	// 		.click()
	// 		.should('contain', '2');
	// });

	it('should see the navbar button', () => {
		user.findByText('Schedule a Demo');
	});
});
