import React from "react";
import { v4 as uuidv4 } from "uuid";
const CreateArticleSelector = ({ action, data, type, selected }) => {
	const listItems = (data, action, type, selected) => {
		if (type === "category") {
			return data.map((item) => {
				return (
					<li key={uuidv4()}>
						<button
							className={
								selected === item.title
									? "dropdown-item active"
									: "dropdown-item"
							}
							type="button"
							value={item.title}
							onClick={action}
						>
							{item.title}
						</button>
					</li>
				);
			});
		} else {
			return data.map((item) => {
				return item.categories.map((categories) => {
					return (
						<li key={uuidv4()}>
							<button
								className={
									selected === categories
										? "dropdown-item active"
										: "dropdown-item"
								}
								type="button"
								value={categories}
								onClick={action}
							>
								{categories}
							</button>
						</li>
					);
				});
			});
		}
	};

	return (
		<div className="dropdown mb-3 tag-dropdown">
			<button
				className="btn btn-info dropdown-toggle"
				type="button"
				id="dropdownMenu2"
				data-bs-toggle="dropdown"
				aria-expanded="false"
			>
				{selected ? selected : "Select .."}
			</button>
			<ul
				className="dropdown-menu tag-dropdown"
				aria-labelledby="dropdownMenu2"
			>
				{listItems(data, action, type, selected)}
			</ul>
		</div>
	);
};

export default CreateArticleSelector;
