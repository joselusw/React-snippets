import * as React from "react";
import { UserList } from "./components/userList";

export const MyApp = () => {
	const [visible, setVisible] = React.useState(true);

	return (
		<>
			{visible && <UserList />}
			<button onClick={() => setVisible(!visible)}>Show/hide list</button>
		</>
	);
};
