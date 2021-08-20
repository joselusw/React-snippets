/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { DashboardItemProps } from "./dashboard.vm";
import * as innerClasses from "./item.styles";

export interface ClassesProps {
	root?: string;
	icon?: string;
	title?: string;
	subtitle?: string;
}

interface Props {
	item: DashboardItemProps;
	classes?: ClassesProps;
	dataTestId?: string;
}

export const ItemComponent: React.FunctionComponent<Props> = (props) => {
	const {
		item: { icon: Icon, title, linkTo, subtitle },
		classes,
		dataTestId,
	} = props;

	return (
		<Link
			css={css(innerClasses.root, classes.root)}
			to={linkTo}
			data-testid={dataTestId}
		>
			<Icon css={css(innerClasses.icon, classes.icon)} />
			<Typography
				variant="h5"
				css={css(innerClasses.title, classes.title)}
			>
				{title}
			</Typography>
			<Typography
				variant="h6"
				css={css(innerClasses.subtitle, classes.subtitle)}
			>
				{subtitle}
			</Typography>
		</Link>
	);
};

ItemComponent.defaultProps = {
	classes: {
		root: "",
		icon: "",
		title: "",
		subtitle: "",
	},
};
