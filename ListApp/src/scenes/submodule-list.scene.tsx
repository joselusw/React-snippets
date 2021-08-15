import { SubmoduleListContainer } from "../pods/submodule-list";
import * as React from "react";
import { AppLayout } from "../layouts";

export const SubmoduleListScene: React.FC = () => {
	return (
		<AppLayout>
			<SubmoduleListContainer />
		</AppLayout>
	);
};
