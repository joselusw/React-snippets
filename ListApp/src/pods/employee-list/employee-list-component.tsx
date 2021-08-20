import React from "react";
import { Employee } from "./employee-list.vm";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
	employees: Employee[];
	onEditEmployee: (id: string) => void;
}

export const EmployeeListComponent: React.FunctionComponent<Props> = ({
	employees,
	onEditEmployee,
}) => {
	return (
		<>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell align="center">Id</TableCell>
							<TableCell align="center">Name</TableCell>
							<TableCell align="center">Email</TableCell>
							<TableCell align="center">Last login</TableCell>
							<TableCell align="center">Active</TableCell>
							<TableCell align="center">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{employees.map((row) => (
							<TableRow key={row.id}>
								<TableCell align="center">{row.id}</TableCell>
								<TableCell align="center">{row.name}</TableCell>
								<TableCell align="center">
									{row.email}
								</TableCell>
								<TableCell align="center">
									{row.lastDateIncurred}
								</TableCell>
								<TableCell
									align="center"
									component="th"
									scope="row"
								>
									<Checkbox checked={row.isActive} disabled />
								</TableCell>
								<TableCell align="center">
									<IconButton>
										<EditIcon
											onClick={() =>
												onEditEmployee(row.id)
											}
										/>
									</IconButton>
									<IconButton>
										<DeleteIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
