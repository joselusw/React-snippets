import { AppLayout } from "../layouts";
import * as React from "react";
import { EmployeeListContainer } from "../pods/employee-list";

export const EmployeeListScene: React.FC = () => {
	return (
		<AppLayout>
			<EmployeeListContainer />
		</AppLayout>
	);
};
