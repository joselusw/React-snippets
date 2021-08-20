import { StringChain } from "lodash";
import React from "react";

export interface DashboardItemProps {
	title: string;
	linkTo: string;
	icon?: React.ComponentType;
	image?: string;
	subtitle?: string;
}
