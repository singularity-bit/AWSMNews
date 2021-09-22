import React, { useState } from "react";

import NewsFeedTemplate from "../Components/NewsFeedTemplate";

function Body() {
	const [activeTab, setActiveTab] = useState(0);
	const [tabNews, setTabNews] = useState("http://localhost:3001/latest");
	//on tabs "noi/populare" change
	const onSelectTab = (tab, news) => {
		setActiveTab(tab);
		setTabNews(`http://localhost:3001/${news}`);
	};

	return (
		<div className="my-4 container">
			<div className="row gx-3 ">
				<div className="col  col-lg-3 col-xl-2  col-sm-4 order-2">
					<ul className="nav">
						<li className="nav-item ">
							<a
								className={
									activeTab === 0
										? "nav-link fs-5 fw-bold text-dark"
										: "nav-link fs-5 fw-bold text-black-50"
								}
								aria-current="page"
								href="#"
								onClick={() => {
									onSelectTab(0, "latest");
								}}
							>
								Noi
							</a>
						</li>
						<li className="nav-item">
							<a
								className={
									activeTab === 1
										? "nav-link fs-5 fw-bold text-dark"
										: "nav-link fs-5 fw-bold text-black-50"
								}
								href="#"
								onClick={() => {
									onSelectTab(1, "breaking");
								}}
							>
								Populare
							</a>
						</li>
					</ul>
					<div className="container-fluid p-0  ">
						<NewsFeedTemplate
							requestUrl={tabNews}
							type="sidebar"
						></NewsFeedTemplate>
					</div>
				</div>
				<div className="col-lg-6 col-sm-4 order-2">
					<NewsFeedTemplate
						requestUrl={"http://localhost:3001/breaking"}
						type="main"
					></NewsFeedTemplate>
				</div>

				<div
					className="col col-lg-4 col-sm-4 order-3 "
					style={{ backgroundColor: "#FFFCDF" }}
				>
					<NewsFeedTemplate
						requestUrl={"http://localhost:3001/recommended"}
						type="recommended"
					></NewsFeedTemplate>
				</div>
			</div>
		</div>
	);
}

export default Body;
