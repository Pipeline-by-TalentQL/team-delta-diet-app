import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './error-boundary.module.css';

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
	state: State = {
		hasError: false,
	};

	static getDerivedStateFromError(error: Error): State {
		console.log(error);
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: React.ErrorInfo) {
		console.log(error, info);
	}

	render() {
		const { children } = this.props;
		return this.state.hasError ? (
			<Container className={styles.errorContainer}></Container>
		) : (
			children
		);
	}
}

export default ErrorBoundary;
