import { css } from "@emotion/react";

export const root = css`
	display: grid;
	height: auto;
	grid-template-columns: 1fr;
	align-items: center;

	@media (min-width: 800px) {
		width: 800px;
		margin: auto;
	}
`;
