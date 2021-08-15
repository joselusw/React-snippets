import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginComponent } from "./login.component";
import { Login } from "./login.vm";
import { isValidLogin } from "./login.api";
import { routes } from "../../core/router";
import { useSnackbarContext } from "../../common/components/snackbar";
import { AuthContext } from "../../core/auth";

export const LoginContainer: React.FC = () => {
	const { setUserSession } = React.useContext(AuthContext);
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
		isValidLogin(login.username, login.password).then((result) => {
			setUserSession({ userName: login.username });
			loginSucceded(result);
		});
	};
	return (
		<>
			<LoginComponent onLogin={handleLogin} />
		</>
	);
};
