import React from "react";
import {
	TabComponent,
	TabListComponent,
	TabPanelComponent,
} from "../../common/components/tab";
import { AppBar } from "@material-ui/core";
import { DataComponent } from "./components";
import { Employee } from "./employee.vm";

interface Props {
	employee: Employee;
	onSave: (employee: Employee) => void;
	onCancel: () => void;
}

export const EmployeeComponent: React.FC<Props> = (props) => {
	const [tab, setTab] = React.useState(0);
	const { employee, onSave, onCancel } = props;

	return (
		<>
			<AppBar position="static">
				<TabListComponent value={tab} onChange={setTab}>
					<TabComponent label="Data" />
					<TabComponent label="Projects" />
					<TabComponent label="Information" />
				</TabListComponent>
			</AppBar>
			<TabPanelComponent value={tab} index={0}>
				<DataComponent
					employee={employee}
					onSave={onSave}
					onCancel={onCancel}
				/>
			</TabPanelComponent>
			<TabPanelComponent value={tab} index={1}>
				<h3>Projects</h3>
			</TabPanelComponent>
			<TabPanelComponent value={tab} index={2}>
				<h3>Info</h3>
			</TabPanelComponent>
		</>
	);
};
