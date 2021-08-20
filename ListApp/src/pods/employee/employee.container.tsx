import { EmployeeComponent } from "./employee.component";
import React from "react";
import { useParams } from "react-router-dom";
import { Employee, createEmptyEmployee } from "./employee.vm";
import { getEmployeeById } from "./api";
import { mapEmployeeFromApiToVm } from "../../pods/employee/employee.mapper";

export const EmployeeContainer: React.FunctionComponent = () => {
	const { id } = useParams<{ id: string }>();
	const [employee, setEmployee] = React.useState<Employee>(
		createEmptyEmployee()
	);

	const onLoadEmployee = async () => {
		const apiEmployee = await getEmployeeById(id);
		const viewModelEmployee = mapEmployeeFromApiToVm(apiEmployee);
		setEmployee(viewModelEmployee);
	};

	const handleSave = (employee: Employee) => {
		return;
	};

	const handleCancel = () => history.back();

	React.useEffect(() => {
		onLoadEmployee();
	}, []);
	return (
		<EmployeeComponent
			employee={employee}
			onSave={handleSave}
			onCancel={handleCancel}
		/>
	);
};
