describe('sample app works', () => {
	const user = cy;
	beforeEach(() => {
		user.visit('/');
	});

	it('load the app correctly', () => {
		// user.findByText('LOGO');
		const logos = user.findAllByText('LOGO');
		cy.wrap(logos).should('have.length', 2);
	});

	it('should see the navbar button', () => {
		user.findByText('Schedule a Demo');
	});
});
