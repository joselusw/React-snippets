import * as apiModel from "./api/employee-list.api-model";
import * as viewModel from "./employee-list.vm";

export const mapEmployeeFromApiToVm = (
	employee: apiModel.Employee
): viewModel.Employee => ({
	...employee,
});

export const mapEmployeeListFromApiToVm = (
	employee: apiModel.Employee[]
): viewModel.Employee[] => employee.map((e) => mapEmployeeFromApiToVm(e));
