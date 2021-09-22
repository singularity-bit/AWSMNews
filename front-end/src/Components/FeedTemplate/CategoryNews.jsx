import React from "react";
import WithNewsCard from "../../HOC/withNewsCard";
import StandardCard from "../Cards/StandardCard";
import { v4 as uuidv4 } from "uuid";
import ErrorPage from "./ErrorPage";

function CategoryNews({ data, style, isError }) {
	const Card = WithNewsCard(StandardCard);
	const displayData = (value) => {
		return data.map((item) => {
			return (
				<div className="row py-4" key={uuidv4()}>
					<div className="container">
						<Card article={item} type={style}></Card>
					</div>
				</div>
			);
		});
	};

	return !isError ? displayData(data) : <ErrorPage isError={isError} />;
}

export default CategoryNews;
