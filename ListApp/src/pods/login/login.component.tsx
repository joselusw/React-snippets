import * as React from "react";
import { Button, Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { CardHeaderProps } from "@material-ui/core";

export const LoginComponent: React.FC = () => {
	return (
		<Card>
			<CardHeader title="Login" />
			<CardContent>
				<form>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<TextField label="Name" />
						<TextField label="Password" type="password" />
						<Button
							type="submit"
							variant="contained"
							color="primary"
						>
							Login
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
};
