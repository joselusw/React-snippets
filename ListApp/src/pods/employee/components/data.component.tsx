import React from "react";
import { Formik, Form } from "formik";
import { TextFieldComponent } from "../../../common/components/form";
import { Employee } from "../employee.vm";

interface Props {
	employee: Employee;
	onSave: (employee: Employee) => void;
	onCancel: () => void;
}

export const DataComponent: React.FunctionComponent<Props> = ({
	employee,
	onSave,
	onCancel,
}) => {
	return (
		<Formik
			initialValues={employee}
			enableReinitialize={true}
			onSubmit={onSave}
		>
			{() => (
				<Form>
					<TextFieldComponent label="Name" name="name" />
					<TextFieldComponent label="Email" name="email" />
				</Form>
			)}
		</Formik>
	);
};
