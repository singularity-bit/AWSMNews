import React, { useEffect, useState } from "react";
import "./newsfeed.css";
import StandardCard from "../Cards/StandardCard";
import WithNewsCard from "../../HOC/withNewsCard";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

function SidebarFeed({ data, style, isLoading }) {
	let [color, setColor] = useState("black");
	const [state, setstate] = useState(0);
	const override = css`
		display: block;
		margin: auto auto;
		border-color: black;
	`;
	const Card = WithNewsCard(StandardCard);

	const newsList = () => {
		return data.map((item, index) => {
			return <Card type={style} article={item} key={index} />;
		});
	};

	return isLoading ? (
		<PuffLoader color={color} loading={isLoading} css={override} size={60} />
	) : (
		<div className="scrolling-area ">
			<div className="px-2 list-group overflow-auto text-start" id="style-4">
				{newsList()}
			</div>
		</div>
	);
}

export default SidebarFeed;
