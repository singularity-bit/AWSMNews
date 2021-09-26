import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";

function StandardCard({ type, article }) {
	const [titleUrl, setTitleUrl] = useState("");

	//gets inner text of the html tags
	const stripedHtml = article.content.replace(/<[^>]+>/g, "");

	useEffect(() => {
		setTitleUrl(encodeURIComponent(article.title));
	}, []);

	return (
		<div className="card border-0 px-0 bg-transparent rounded-0">
			<div className="card-body px-0">
				{type === "highlight" && (
					<Link
						className="text-decoration-none text-reset"
						to={`/${article.category.toLowerCase()}/${
							article.tag
						}/${titleUrl}`}
					>
						<h1 className="card-title fw-bold">{article.title}</h1>
					</Link>
				)}
				{type !== "sidebar" && (
					<Link
						to={`/${article.category.toLowerCase()}/${
							article.tag
						}/${titleUrl}`}
					>
						<img
							src={article.image}
							className="img-thumbnail border-0 p-0 rounded-0"
							alt="..."
						/>
					</Link>
				)}
				<p className="fw-bold text-danger my-2">
					{article.tag}
					<span
						className={
							article.tag
								? "fw-bold text-muted my-2 mx-4"
								: "fw-bold text-muted my-2"
						}
					>
						{article.createdAt}
					</span>
				</p>
				{type === "recommended" || type === "main" ? (
					<Link
						to={`/${article.category.toLowerCase()}/${
							article.tag
						}/${titleUrl}`}
						className="text-decoration-none text-reset"
					>
						<h5 className="card-title fw-bold ">{article.title}</h5>
					</Link>
				) : null}
				{type === "sidebar" && (
					<Link
						to={`/${article.category.toLowerCase()}/${
							article.tag
						}/${titleUrl}`}
						className="text-decoration-none text-reset"
					>
						<h6 className="card-title fw-bold ">{article.title}</h6>
					</Link>
				)}
				{type !== "sidebar" && (
					<p className="card-text overflow-hidden truncate ">
						<Truncate lines={4} ellipsis={<span>...</span>}>
							{stripedHtml}
						</Truncate>
					</p>
				)}
			</div>
		</div>
	);
}

export default StandardCard;
