/** @jsx jsx */
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AuthContext } from "../core/auth";
import * as classes from "./app.layout.style";
import { jsx } from "@emotion/react";

export const AppLayout: React.FC = ({ children }) => {
	const { userName } = React.useContext(AuthContext);
	return (
		<div>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Origin - Project tracker
					</Typography>
					<Typography
						variant="h6"
						color="inherit"
						css={classes.loginText}
					>
						{userName}
					</Typography>
				</Toolbar>
			</AppBar>
			{children}
		</div>
	);
};
