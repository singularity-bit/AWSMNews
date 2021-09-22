import React from "react";
import { useParams } from "react-router";
const ErrorPage = ({ isError }) => {
	let { query } = useParams();
	return (
		<div className="container text-center mt-3">
			<h2 className="fw-bold">Ooopss! Something is wrong ...</h2>
			<h4>{isError.status}</h4>
			<h4>
				"{query}" {isError.data}
			</h4>
		</div>
	);
};

export default ErrorPage;
