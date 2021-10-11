import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomButton from '../../components/global/customButton/customButton';
import CustomInput from '../../components/global/customInput/customInput';

const ComponentsPreview = () => {
	return (
		<Container className="mt-5">
			<Row>
				<h3 className="mb-5">
					Inputs - Props (type ['The type of the Input'], placeholder, label
					['The label of the input'])
				</h3>
				<Col>
					<div className="mb-5">
						<h4>Normal Input (sm)</h4>
						<CustomInput
							type="text"
							placeholder="Input Field"
							inputType="normal"
							size="sm"
							onChange={() => {}}
						/>

						<h4>Normal Input (default size)</h4>
						<CustomInput
							type="text"
							placeholder="Input Field"
							inputType="normal"
							onChange={() => {}}
						/>

						<h4>Normal Input (lg)</h4>
						<CustomInput
							type="text"
							placeholder="Input Field"
							inputType="normal"
							size="lg"
							onChange={() => {}}
						/>
					</div>
				</Col>
			</Row>
			<Row>
				<h3 className="mb-5">
					Input Group - Props (type ['The type of the Input'], placeholder,
					label ['The label of the input'])
				</h3>
				<Col>
					<div className="mb-5">
						<h4>Input Group</h4>
						<CustomInput
							type="text"
							placeholder="Input Field"
							inputType="group"
							onChange={() => {}}
						>
							<CustomButton>Medium</CustomButton>
						</CustomInput>
					</div>
				</Col>
			</Row>
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
