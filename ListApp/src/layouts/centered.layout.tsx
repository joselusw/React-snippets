// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { jsx } from "@emotion/react";
import * as React from "react";
import * as classes from "./centered.layout.styles";

export const CenteredLayout: React.FunctionComponent = (props) => {
	const { children } = props;
	return <div css={classes.root}>{children}</div>;
};
