import React from "react";
import { DashboardItemProps } from "../../common/components/dashboard";
import { SubmoduleListComponent } from "./submodule-list.component";
import { routes } from "../../core/router";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import GroupIcon from "@material-ui/icons/Group";

export const SubmoduleListContainer: React.FC = () => {
	const items: DashboardItemProps[] = React.useMemo(
		(): DashboardItemProps[] => [
			{
				title: "Proyectos",
				linkTo: "#",
				icon: AccountBalanceIcon,
			},
			{
				title: "Empleados",
				linkTo: routes.employees,
				icon: GroupIcon,
			},
		],
		[]
	);

	return <SubmoduleListComponent items={items} />;
};
