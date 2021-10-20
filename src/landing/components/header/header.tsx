import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CustomInput from '../global/customInput/customInput';
import CustomButton from '../global/customButton/customButton';
import styles from './header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<Container className="h-100">
				<Row className="h-100">
					<Col sm={5} md={4} className="my-auto">
						<h3 className="text-lg-4 mb-4">
							Eat <span className="text-primary">Healthy</span>, Feel{' '}
							<span className="text-primary">Great</span>
						</h3>
						<p className="text-lg mb-5">
							We help you save time, money and stress and
							<br />
							deliver healthy and fresh meals that are ready to eat
						</p>
						<CustomInput
							type="text"
							placeholder="Enter Email Address"
							border="primary"
							inputType="group"
							onChange={() => {}}
						>
							<CustomButton>
								Join WaitList{' '}
								<img
									style={{ marginLeft: '7px' }}
									src="src/landing/assets/images/icons/arrow-right.png"
								/>
							</CustomButton>
						</CustomInput>
					</Col>
				</Row>
				<div className={`${styles.headerBox} bg-white`}>
					<Row className="h-100">
						<Col className={`${styles.headerCol} pl-3 my-auto`}>
							<div className="d-flex flex-row">
								<div className={styles.headerBoxImage}>
									<img src="/src/landing/assets/images/icons/select.png" />
								</div>
								<div>
									<h3 className="text-md-2">Select your preference</h3>
									<p className="text-md">
										Here you tell us your dietary preferences, <br />
										what best describes you and if there are <br />
										certain foods you want to avoid.
									</p>
								</div>
							</div>
						</Col>
						<Col className={`${styles.headerCol} my-auto`}>
							<div className="d-flex flex-row">
								<div className={styles.headerBoxImage}>
									<img src="/src/landing/assets/images/icons/plan.png" />
								</div>
								<div>
									<h3 className="text-md-2">Choose Plan and Customize</h3>
									<p className="text-md">
										Tell us how many times you need meals <br />
										weekly and customizeto when you need it <br />
										(Breakfast, lunch or dinner)
									</p>
								</div>
							</div>
						</Col>
						<Col className={`${styles.headerCol} my-auto`}>
							<div className="d-flex flex-row">
								<div className={styles.headerBoxImage}>
									<img src="/src/landing/assets/images/icons/deliver.png" />
								</div>
								<div>
									<h3 className="text-md-2">We deliver, you Enjoy</h3>
									<p className="text-md">
										We prepare and deliver your select <br />
										meals for each day in your plan. No <br />
										more stress to have a healthy diet.
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</Container>
		</header>
	);
};

export default Header;
