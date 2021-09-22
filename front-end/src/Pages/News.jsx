import React, { useEffect } from "react";
import NewsFeedTemplate from "../Components/NewsFeedTemplate";

import { useParams } from "react-router";
function News() {
	let { category, query } = useParams();
	useEffect(() => {
		console.log("query", query);
	}, [query]);
	return (
		<div className="container p-0 py-4">
			<NewsFeedTemplate
				type="news"
				requestUrl={
					query
						? `http://localhost:3001/find-article/${query}`
						: category
						? `http://localhost:3001/news/${category}`
						: "http://localhost:3001/get-articles"
				}
			/>
		</div>
	);
}

export default News;
