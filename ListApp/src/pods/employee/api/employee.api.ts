import { Employee } from "./employee.api.model";
import { mockEmployee } from "./mocks/employee.mock-data";

export const getEmployeeById = async (id: string): Promise<Employee> => {
	return mockEmployee;
};
