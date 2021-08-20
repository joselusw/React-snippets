import React from "react";
import { getEmployeeList } from "./api";
import { EmployeeListComponent } from "./employee-list-component";
import { mapEmployeeListFromApiToVm } from "./employee-list.mapper";
import { Employee } from "./employee-list.vm";
import { useHistory } from "react-router";
import { routes } from "../../core/router";

export const EmployeeListContainer: React.FC = () => {
	const [employees, setEmployees] = React.useState<Employee[]>([]);
	const history = useHistory();

	const onLoadEmployeeList = async () => {
		const apiEmployeeList = await getEmployeeList();
		const viewModelEmployeeList =
			mapEmployeeListFromApiToVm(apiEmployeeList);
		setEmployees(viewModelEmployeeList);
	};

	const handleEditEmployee = (id: string) => {
		history.push(routes.editEmployee(id));
	};

	React.useEffect(() => {
		onLoadEmployeeList();
	}, []);

	return (
		<>
			<EmployeeListComponent
				employees={employees}
				onEditEmployee={handleEditEmployee}
			/>
		</>
	);
};
