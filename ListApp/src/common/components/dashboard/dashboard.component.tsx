/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { ItemComponent, ClassesProps } from "./item.component";
import { DashboardItemProps } from "./dashboard.vm";
import * as innerClasses from "./dashboard.styles";

interface ClassNameProps {
	root?: string;
	items?: string;
	item?: ClassesProps;
}

interface Props {
	items: DashboardItemProps[];
	classes?: ClassNameProps;
	dataTestId?: string;
}

export const DashboardComponent: React.FunctionComponent<Props> = (props) => {
	const { items, classes, dataTestId } = props;

	return (
		<div>
			{items.map(
				(item) =>
					Boolean(item) && (
						<ItemComponent
							key={item.title}
							classes={{
								...classes.item,
								root: css(
									innerClasses.item,
									classes.item.root
								).toString(),
							}}
							item={item}
						/>
					)
			)}
		</div>
	);
};

DashboardComponent.defaultProps = {
	classes: {
		root: "",
		items: "",
		item: {
			root: "",
			icon: "",
			title: "",
		},
	},
};
