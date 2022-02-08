import styled from '@emotion/styled';

interface HorizontalScrollWrapperProps {
	centered?: boolean;
}

export const HorizontalScrollWrapper = styled.div<HorizontalScrollWrapperProps>`
	display: flex;
	justify-content: ${(props) => (props.centered ? 'center' : 'start')};
	gap: 30px;
	overflow-x: scroll;
	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
`;

interface OptionProps {
	isSelected?: boolean;
}
export const Option = styled.div<OptionProps>`
	min-width: 160px;
	width: 160px;
	height: 160px;
	padding: 14px;
	border: 1px solid #a5adba;
	border-radius: 12px;
	cursor: pointer;
	background: ${(props) => (props.isSelected ? '#e3fcef' : 'transparent')};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	h3 {
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;
	}

	p {
		font-size: 11px;
		line-height: 14px;
		color: #b3bac5;
	}
`;
