describe('sample app works', () => {
	const user = cy;
	beforeEach(() => {
		user.visit('/app/login');
	});

	// it('load the app correctly', () => {
	// 	// user.findByText('LOGO');
	// 	const logos = user.findAllByText('Login');
	// 	logos.should('have.length', 1);
	// });
});
