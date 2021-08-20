import { Employee } from "../employee-list.api-model";

export const MockEmployeeList: Employee[] = [
	{
		id: "1",
		isActive: true,
		name: "Joselu Gallardo",
		email: "jose.gallardo994@gmail.com",
		lastDateIncurred: new Date().toLocaleString(),
	},
];
