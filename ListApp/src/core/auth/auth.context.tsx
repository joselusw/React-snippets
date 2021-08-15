import React from "react";
import { UserSession, createEmptyUserSession } from "./auth.vm";

interface Context extends UserSession {
	setUserSession: (userSession: UserSession) => void;
}

const noUserLogin = "no user login";

export const AuthContext = React.createContext<Context>({
	userName: noUserLogin,
	setUserSession: () =>
		console.warn(
			"If you are reading this, likely you forgot to add something"
		),
});

export const AuthProvider: React.FC = ({ children }) => {
	const [userSession, setUserSession] = React.useState<UserSession>(
		createEmptyUserSession()
	);

	return (
		<AuthContext.Provider
			value={{
				userName: userSession.userName,
				setUserSession,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
