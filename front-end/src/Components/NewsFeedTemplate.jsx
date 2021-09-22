import React from "react";
import WithNewsFeed from "../HOC/withNewsFeed";
import RecommendedNews from "./FeedTemplate/RecommendedNews";

function NewsFeedTemplate({ type, requestUrl }) {
	const News = WithNewsFeed(RecommendedNews, requestUrl);

	return (
		<div className={type === "main" ? "border-end border-start" : ""}>
			<div
				className={
					type === "main" || type === "recommended"
						? "nav-link"
						: "nav-link p-0"
				}
			>
				<h5 className="m-0 p-0 fw-bold text-black-50 text-uppercase">
					{type !== "sidebar" && type}
				</h5>
			</div>
			<News style={type} type={type} />
		</div>
	);
}

export default NewsFeedTemplate;
