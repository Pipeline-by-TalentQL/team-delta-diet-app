import React from 'react';
import CustomButton from '../global/customButton/customButton';
import styles from './navbar.module.scss';

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<h3>LOGO</h3>
			<div className={styles.navbar__links}>
				<a href="" className={styles.navbar__link}>
					Home
				</a>
				<a href="" className={styles.navbar__link}>
					About
				</a>
				<a href="" className={styles.navbar__link}>
					FAQ
				</a>
				<a href="" className={styles.navbar__link}>
					Contacts
				</a>
			</div>
			<CustomButton type="button" size="lg" variant="outline-primary">
				Schedule a Demo
			</CustomButton>
		</div>
	);
};

export default Navbar;
