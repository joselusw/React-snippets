import { SnackbarProvider } from "./common/components/snackbar";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { RouterComponent } from "./core/router";
import { ThemeProviderComponent } from "./core/theme";
import { AuthProvider } from "./core/auth";

export const App = () => {
	return (
		<ThemeProviderComponent>
			<AuthProvider>
				<SnackbarProvider>
					<RouterComponent />
				</SnackbarProvider>
			</AuthProvider>
		</ThemeProviderComponent>
	);
};

export default hot(App);
