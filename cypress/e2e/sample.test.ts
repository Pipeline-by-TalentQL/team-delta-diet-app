describe('sample app works', () => {
	const user = cy;
	beforeEach(() => {
		user.visit('/');
	});

	it('load the app correctly', () => {
		// user.findByText('LOGO');
		const logos = user.findAllByText('LOGO');
		logos.should('have.length', 2);
	});
});
