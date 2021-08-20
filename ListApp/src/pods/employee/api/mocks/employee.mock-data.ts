import { TrendingDown } from "@material-ui/icons";
import { Employee, ProjectSummary } from "../employee.api.model";

export const mockProjectSummaryList: ProjectSummary[] = [
	{
		id: "1",
		isAssigned: true,
		projectName: "Mapfre",
	},
	{
		id: "2",
		isAssigned: true,
		projectName: "Zurich",
	},
];

export const mockEmployee: Employee = {
	id: "1",
	name: "Joselu",
	email: "jose@gmail.com",
	isActive: true,
	temporalPassword: "admin",
	projects: mockProjectSummaryList,
};
