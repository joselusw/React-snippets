import * as React from "react";
import { useSafeState } from "../hooks/useSafeState";

export const UserList = () => {
	const [getUsers, setUsers] = useSafeState([]);

	setTimeout(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, 2500);

	return (
		<>
			<h2>Users List</h2>
			<ul>
				{getUsers.map((user, index) => (
					<li key={index}>{user.name}</li>
				))}
			</ul>
		</>
	);
};
