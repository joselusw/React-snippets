import { CenteredLayout } from "../layouts";
import * as React from "react";
import { LoginContainer } from "../pods/login/login.container";

export const LoginScene: React.FC = () => {
	return (
		<CenteredLayout>
			<LoginContainer />
		</CenteredLayout>
	);
};
