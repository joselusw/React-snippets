import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { Login } from "./login.vm";
import { isValidLogin } from "./login.api";
import { routes } from "../../core/router";
import { useSnackbarContext } from "../../common/components/snackbar";

export const LoginContainer: React.FC = () => {
	const history = useHistory();
	const { showMessage } = useSnackbarContext();

	const loginSucceded = (isValid: boolean) => {
		if (isValid) {
			history.push(routes.submoduleList);
		} else {
			showMessage("User/password not valid.", "error");
		}
	};
	const handleLogin = (login: Login) => {
		isValidLogin(login.username, login.password).then(loginSucceded);
	};
	return (
		<>
			<LoginComponent onLogin={handleLogin} />
		</>
	);
};
