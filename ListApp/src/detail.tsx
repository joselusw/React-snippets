import * as React from "react";
import { useParams, Link } from "react-router-dom";

export const DetailView: React.FC = () => {
	const { id } = useParams();
	return (
		<>
			<h2>Details:</h2>
			<h4>UserID: {id}</h4>
			<Link to="/list">Back to list</Link>
		</>
	);
};
