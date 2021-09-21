import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../../components/global/button/customButton';

const ComponentsPreview = () => {
	return (
		<Container>
			<Row>
				<h3 className="mb-5">
					Buttons - Props (variant ['The color of the button'], size ['The size
					of the button'])
				</h3>
				<Col>
					<h4>Primary Color Button (default)</h4>
					<div className="mb-2">
						<CustomButton size="sm">Small</CustomButton>
					</div>
					<div className="mb-2">
						<CustomButton>Medium</CustomButton>
					</div>
					<div className="d-grid">
						<CustomButton>Block Level</CustomButton>
					</div>
				</Col>
				<Col>
					<h4>Secondary Color Button (default)</h4>
					<div className="mb-2">
						<CustomButton size="sm" variant="secondary">
							Small
						</CustomButton>
					</div>
					<div className="mb-2">
						<CustomButton variant="secondary">Medium</CustomButton>
					</div>
					<div className="d-grid">
						<CustomButton variant="secondary">Block Level</CustomButton>
					</div>
				</Col>
				<Col>
					<h4>Primary Color Button (outlined)</h4>
					<div className="mb-2">
						<CustomButton size="sm" variant="outline-primary">
							Small
						</CustomButton>
					</div>
					<div className="mb-2">
						<CustomButton variant="outline-primary">Medium</CustomButton>
					</div>
					<div className="d-grid">
						<CustomButton variant="outline-primary">Block Level</CustomButton>
					</div>
				</Col>
				<Col>
					<h4>Secondary Color Button (outlined)</h4>
					<div className="mb-2">
						<CustomButton size="sm" variant="outline-secondary">
							Small
						</CustomButton>
					</div>
					<div className="mb-2">
						<CustomButton variant="outline-secondary">Medium</CustomButton>
					</div>
					<div className="d-grid">
						<CustomButton variant="outline-secondary">Block Level</CustomButton>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default ComponentsPreview;
