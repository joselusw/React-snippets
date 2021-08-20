import { Employee } from "./employee-list.api-model";
import { MockEmployeeList } from "./mocks/employee-list.mock";

let employeeList = [...MockEmployeeList];

export const getEmployeeList = async (): Promise<Employee[]> => {
	return employeeList;
};

export const deleteEmployee = async (id: string): Promise<boolean> => {
	employeeList = employeeList.filter((e) => e.id !== id);
	return true;
};
