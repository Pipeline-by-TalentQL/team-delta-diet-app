import React from 'react';
import CustomButton from '../global/customButton/customButton';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<section className={styles.footer__img}>
				<h2>Join our waitlist</h2>
				<p>
					Subscribe to be up to date with our latest <br /> news and stories
				</p>
				<form>
					<div>
						<label htmlFor="email">
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Enter email address"
							/>
						</label>
					</div>

					<CustomButton type="button" size="lg" variant="secondary">
						JOIN WAITLIST
					</CustomButton>
				</form>

				<section>
					<p>Follow us on</p>
				</section>
			</section>
			<section className={styles.footer__top}>
				<h2>LOGO</h2>
				<div className={styles['footer__social-icons']}>
					<div className={styles['footer__social-icon']}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
						</svg>
					</div>
					<div className={styles['footer__social-icon']}>
						<svg
							width="8"
							height="15"
							viewBox="0 0 8 15"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M2.03188 14.2681H4.87245V8.57985H7.4318L7.71302 5.75349H4.87245V4.3261C4.87245 4.13776 4.94727 3.95713 5.08045 3.82395C5.21362 3.69078 5.39425 3.61596 5.58259 3.61596H7.71302V0.775391H5.58259C4.64089 0.775391 3.73775 1.14948 3.07186 1.81537C2.40598 2.48126 2.03188 3.38439 2.03188 4.3261V5.75349H0.611599L0.330383 8.57985H2.03188V14.2681Z" />
						</svg>
					</div>
					<div className={styles['footer__social-icon']}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
						>
							<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
						</svg>
					</div>
				</div>
			</section>

			<section className={styles.footer__bottom}>
				<div className={styles.bottom__left}>
					<h3>Sign up for update</h3>
					<p>
						Need more info and want a free chat session with a chef? <br />
						We would be glad to schedule a one-on-one demo to tell you <br />
						more on how we work.
					</p>

					<form>
						<div>
							<label htmlFor="email">
								<input
									type="email"
									id="email"
									name="email"
									placeholder="Email Address"
								/>
							</label>
						</div>

						<CustomButton type="button" size="lg" variant="primary">
							Submit
						</CustomButton>
					</form>
				</div>
				<div className={styles.bottom__center}>
					<h3>Useful Links</h3>
					<section>
						<div className="left">
							<a href="">.Main</a>
							<a href="">.About Us</a>
							<a href="">.News</a>
							<a href="">.FAQs</a>
						</div>
						<div className="right">
							<a href="">.Menu</a>
							<a href="">.Blog</a>
							<a href="">.Privacy</a>
							<a href="">.Terms</a>
						</div>
					</section>
				</div>
				<div className={styles.bottom__right}>
					<h3>Contact us</h3>
					<div className={styles.channels}>
						<div className={styles.channel}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
								/>
							</svg>
							<p>+234107283685</p>
						</div>
						<div className={styles.channel}>
							<svg
								width="17"
								height="19"
								viewBox="0 0 17 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M10.5 6.87028H12.1667V8.53695H10.5V6.87028ZM12.1667 3.53695H10.5V5.20361H12.1667V3.53695ZM7.16667 11.8703H8.83333V10.2036H7.16667V11.8703ZM8.83333 3.53695H7.16667V5.20361H8.83333V3.53695ZM7.16667 8.53695H8.83333V6.87028H7.16667V8.53695ZM5.5 3.53695H3.83333V5.20361H5.5V3.53695ZM5.5 6.87028H3.83333V8.53695H5.5V6.87028ZM10.125 16.8703H8.83333V13.9536H7.16667V16.8703H2.16667V1.87028H13.8333V8.56195C14.425 8.61195 14.9917 8.79528 15.5 9.06195V0.203613H0.5V18.5369H11.2583C10.9167 18.0703 10.5 17.5036 10.125 16.8703ZM3.83333 15.2036H5.5V13.5369H3.83333V15.2036ZM5.5 10.2036H3.83333V11.8703H5.5V10.2036ZM16.3333 13.1203C16.3333 15.2869 13.4167 18.5369 13.4167 18.5369C13.4167 18.5369 10.5 15.2869 10.5 13.1203C10.5 11.5369 11.8333 10.2036 13.4167 10.2036C15 10.2036 16.3333 11.5369 16.3333 13.1203ZM14.4167 13.2036C14.4167 12.7036 13.9167 12.2036 13.4167 12.2036C12.9167 12.2036 12.4167 12.6203 12.4167 13.2036C12.4167 13.7036 12.8333 14.2036 13.4167 14.2036C14 14.2036 14.5 13.7036 14.4167 13.2036Z"
									fill="#B20000"
								/>
							</svg>

							<p>
								Office address here, <br /> probably two lines
							</p>
						</div>
						<div className={styles.channel}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
							<p>hello@sweetdish.ng</p>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;
