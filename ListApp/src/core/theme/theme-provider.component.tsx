import * as React from "react";
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

export const ThemeProviderComponent: React.FC = (props) => {
	const { children } = props;

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StylesProvider>
	);
};
