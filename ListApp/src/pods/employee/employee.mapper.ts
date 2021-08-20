import * as apiModel from "./api/employee.api.model";
import * as viewModel from "./employee.vm";

export const mapProjectSummaryFromApiToVm = (
	projectSummary: apiModel.ProjectSummary
): viewModel.ProjectSummary => ({
	...projectSummary,
});

export const mapProjectSummaryListFromApiToVm = (
	projectSummaryList: apiModel.ProjectSummary[]
): viewModel.ProjectSummary[] =>
	projectSummaryList.map((sum) => mapProjectSummaryFromApiToVm(sum));

export const mapEmployeeFromApiToVm = (employee: apiModel.Employee) => {
	return Boolean(employee)
		? {
				...employee,
				projects: mapProjectSummaryListFromApiToVm(employee.projects),
		  }
		: viewModel.createEmptyEmployee();
};

export const mapEmployeeListFromApiToVm = (
	employeeList: apiModel.Employee[]
): viewModel.Employee[] =>
	employeeList.map((emp) => mapEmployeeFromApiToVm(emp));
