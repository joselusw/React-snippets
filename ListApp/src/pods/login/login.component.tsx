import * as React from "react";
import { Button, Card } from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { CardHeaderProps } from "@material-ui/core";
import { Login, createEmptyLogin } from "./login.vm";
import { Form, Formik } from "formik";
import { TextFieldComponent } from "../../common/components/form";
import { formValidation } from "./login.validation";

interface Props {
	onLogin: (login: Login) => void;
}

export const LoginComponent: React.FC<Props> = (props) => {
	const { onLogin } = props;
	return (
		<Card>
			<CardHeader title="Login" />
			<CardContent>
				<Formik
					onSubmit={onLogin}
					initialValues={createEmptyLogin()}
					validate={formValidation.validateForm}
				>
					{() => (
						<Form>
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
								}}
							>
								<TextFieldComponent
									name="username"
									label="Name"
								/>
								<TextFieldComponent
									name="password"
									type="password"
									label="Password"
								/>
								<Button
									type="submit"
									variant="contained"
									color="primary"
								>
									Login
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			</CardContent>
		</Card>
	);
};
