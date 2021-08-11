import * as React from "react";
import { generatePath, Link } from "react-router-dom";

interface Member {
	id: string;
	login: string;
	avatar_url: string;
}

export const ListPage: React.FC = () => {
	const [members, setMembers] = React.useState<Member[]>([]);

	React.useEffect(() => {
		fetch("https://api.github.com/orgs/lemoncode/members")
			.then((response) => response.json())
			.then((json) => setMembers(json));
	}, []);

	return (
		<>
			<h2>List Page</h2>
			<table>
				<thead />
				<tbody>
					{members.map((member) => (
						<tr key={member.id}>
							<td>
								<img
									src={member.avatar_url}
									style={{ width: "5rem" }}
								/>
							</td>
							<td>
								<span>{member.id}</span>
							</td>
							<td>
								<Link
									to={generatePath("detail/:id", {
										id: member.login,
									})}
								>
									{member.login}
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};
