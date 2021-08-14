import { SnackbarProvider } from "./common/components/snackbar";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { RouterComponent } from "./core/router";
import { ThemeProviderComponent } from "./core/theme";

export const App = () => {
	return (
		<ThemeProviderComponent>
			<SnackbarProvider>
				<RouterComponent />
			</SnackbarProvider>
		</ThemeProviderComponent>
	);
};

export default hot(App);
