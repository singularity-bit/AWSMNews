import React, { useEffect } from "react";
import NewsFeedTemplate from "../Components/NewsFeedTemplate";

import { useParams, useLocation } from "react-router";
function News() {
	//category-when accessed specific category tab e.g "social"
	//query-when searched for specific item
	//location-when accessed whole category e.g "news" or "special reports"
	let { category, query } = useParams();
	const location = useLocation();

	useEffect(() => {
		console.log("location", location.pathname.split("/")[1]);
	}, [location]);
	return (
		<div className="container p-0 py-4">
			{}
			<NewsFeedTemplate
				type="news"
				requestUrl={
					query
						? `http://localhost:3001/find-article/${query}`
						: category
						? `http://localhost:3001/news/${
								location.pathname.split("/")[1]
						  }/${category}`
						: `http://localhost:3001/get-articles${location.pathname}`
				}
			/>
		</div>
	);
}

export default News;
