import { AppLayout } from "../layouts";
import { EmployeeContainer } from "../pods/employee";
import * as React from "react";

export const EmployeeScene: React.FC = () => {
	return (
		<AppLayout>
			<EmployeeContainer />
		</AppLayout>
	);
};
