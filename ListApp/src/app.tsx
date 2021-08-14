import { SnackbarProvider } from "./common/components/snackbar";
import * as React from "react";
import { hot } from "react-hot-loader/root";
import { RouterComponent } from "./core/router";

export const App = () => {
	return (
		<SnackbarProvider>
			<RouterComponent />
		</SnackbarProvider>
	);
};

export default hot(App);
