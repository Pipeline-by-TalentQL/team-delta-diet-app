// Borrowed and tweaked from https://www.joshwcomeau.com/react/modern-spacer-gif/
// Used to create space between components

import styled from '@emotion/styled';

import { device } from '../constants/device-sizes';

function getResponsiveSpace(breakpoint: number | undefined) {
	return typeof breakpoint === 'number' ? breakpoint + 'px' : undefined;
}

interface SpacerProps {
	size: number;
	tabletAndUp?: number;
	laptopAndUp?: number;
	desktopAndUp?: number;
}

const Spacer = styled.span<SpacerProps>`
	display: block;
	width: ${(p) => p.size}px;
	min-width: ${(p) => p.size}px;
	height: ${(p) => p.size}px;
	min-height: ${(p) => p.size}px;

	@media ${device.tablet} {
		width: ${(p) => getResponsiveSpace(p.tabletAndUp)};
		min-width: ${(p) => getResponsiveSpace(p.tabletAndUp)};
		height: ${(p) => getResponsiveSpace(p.tabletAndUp)};
		min-height: ${(p) => getResponsiveSpace(p.tabletAndUp)};
	}

	@media ${device.laptop} {
		width: ${(p) => getResponsiveSpace(p.laptopAndUp)};
		min-width: ${(p) => getResponsiveSpace(p.laptopAndUp)};
		height: ${(p) => getResponsiveSpace(p.laptopAndUp)};
		min-height: ${(p) => getResponsiveSpace(p.laptopAndUp)};
	}

	@media ${device.laptopL} {
		width: ${(p) => getResponsiveSpace(p.desktopAndUp)};
		min-width: ${(p) => getResponsiveSpace(p.desktopAndUp)};
		height: ${(p) => getResponsiveSpace(p.desktopAndUp)};
		min-height: ${(p) => getResponsiveSpace(p.desktopAndUp)};
	}
`;

export default Spacer;
