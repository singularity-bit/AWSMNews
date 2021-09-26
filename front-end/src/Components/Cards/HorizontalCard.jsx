import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Truncate from "react-truncate";

function HorizontalCard({ article }) {
	const [titleUrl, setTitleUrl] = useState("");

	//gets inner text of the html tags
	const stripedHtml = article.content.replace(/<[^>]+>/g, "");

	useEffect(() => {
		setTitleUrl(encodeURIComponent(article.title));
	}, []);
	return (
		<div className="card border-0 px-0 bg-transparent rounded-0">
			<div className="row g-0">
				<div className="col-md-4">
					<Link
						to={`/${article.category.toLowerCase()}/${
							article.tag
						}/${titleUrl}`}
					>
						<img src={article.image} className="img-fluid" alt="..." />
					</Link>
				</div>
				<div className="col-md-8 ">
					<div className="card-body py-2 py-lg-0 px-0 px-lg-3">
						<Link
							to={`/${article.category.toLowerCase()}/${
								article.tag
							}/${titleUrl}`}
							className="text-decoration-none text-reset"
						>
							<h6 className="card-title fw-bold">{article.title}</h6>
						</Link>

						<p className="card-text">
							<Truncate lines={4} ellipsis={<span>...</span>}>
								{stripedHtml}
							</Truncate>
						</p>

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
					</div>
				</div>
			</div>
		</div>
	);
}

export default HorizontalCard;
