import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import CreateArticleSelector from "../Components/CreateArticleSelector";
import { menuList } from "../Components/Header/Menu";
import "react-quill/dist/quill.snow.css";
import { Redirect } from "react-router";

function CreateArticle() {
	const [text, setText] = useState("");
	const [file, setFile] = useState("");
	const [title, setTitle] = useState("");
	const [cover, setCover] = useState("");
	const [type, setType] = useState("");
	const [tag, setTag] = useState("");
	const [category, setCategory] = useState("");
	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
	];

	const onTitleChange = (value) => {
		setTitle(value.target.value);
	};
	const onCoverChange = (value) => {
		setCover(value.target.files[0]);
	};
	const onTextChange = (value) => {
		setText(value);
	};
	const onFileChange = () => {
		const input = document.createElement("input");
		input.setAttribute("type", "file");
		input.setAttribute("accept", "image/*");
		input.click();
		input.onchange = () => {
			const file = input.files[0];
			let context = { ...text, file };
		};
	};

	const onTypeChange = (value) => {
		setType(value.target.value);
	};

	const onTagChange = (value) => {
		setTag(value.target.value);
	};
	const onCategoryChange = (value) => {
		setCategory(value.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		const data = new FormData();

		data.append("title", title);
		data.append("image", cover);
		data.append("content", text);
		data.append("authors", "vasile");
		data.append("tag", tag.toUpperCase());
		data.append("type", type.toUpperCase());
		data.append("category", category.toLowerCase());

		axios
			.post("http://localhost:3001/post-article", data, {
				onUploadProgress: (progressEvent) => {
					console.log(
						"uploaded ",
						progressEvent.loaded / progressEvent.total
					);
				},
			})
			.then((res) => {
				<Redirect to="/" />;
			})
			.catch((err) => console.log(err));
	};

	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, false] }],
				["bold", "italic", "underline", "strike", "blockquote"],
				[
					{ list: "ordered" },
					{ list: "bullet" },
					{ indent: "-1" },
					{ indent: "+1" },
				],
				["link", "image"],
				["clean"],
			],
			table: true,
		},
	};
	useEffect(() => {
		setTag("");
		setType("");
	}, [category]);
	return (
		<div className="container pt-3 px-0">
			<div className="row">
				<div className="col">
					<form onSubmit={(e) => onSubmit(e)}>
						<h5 className="fw-bold pt-5 pb-3 px-3 px-lg-0">
							Create new Article
						</h5>
						<div className="mb-3 px-3 px-lg-0">
							<label for="exampleInputEmail1" className="form-label">
								Article title
							</label>
							<input
								type="text"
								className="form-control"
								onChange={(e) => onTitleChange(e)}
								required={true}
							/>
						</div>
						<div className="mb-3">
							<label for="formFile" className="form-label">
								Select Cover image
							</label>
							<input
								className="form-control"
								type="file"
								id="formFile"
								onChange={(e) => onCoverChange(e)}
								required={true}
							/>
						</div>

						<div className="mb-3 px-3 px-lg-0">
							<label for="exampleInputEmail1" className="form-label">
								Article Content
							</label>
							<ReactQuill
								theme="snow"
								modules={modules}
								formats={formats}
								value={text}
								onChange={onTextChange}
							/>
						</div>
						<div className="px-3 px-lg-0">
							<label className="form-label">Select Category</label>
						</div>
						<CreateArticleSelector
							action={(e) => onCategoryChange(e)}
							data={menuList}
							selected={category}
							type="category"
						/>
						{category ? (
							<div>
								<div className=" px-3 px-lg-0">
									<label className="form-label">
										Select type of news
									</label>
								</div>
								<div className="form-check-inline mb-3">
									<input
										className="form-check-input"
										id="inlineCheckbox1"
										type="radio"
										value="RECOMMENDED"
										checked={"RECOMMENDED" === type}
										onChange={onTypeChange}
									/>
									<label
										className="form-check-label mx-2"
										for="inlineCheckbox1"
									>
										recommended
									</label>
								</div>
								<div className="form-check-inline mb-3">
									<input
										className="form-check-input"
										id="inlineCheckbox2"
										type="radio"
										value="BREAKING"
										checked={"BREAKING" === type}
										onChange={onTypeChange}
									/>
									<label
										className="form-check-label mx-2"
										for="inlineCheckbox2"
									>
										breaking
									</label>
								</div>
							</div>
						) : (
							<div></div>
						)}

						{category && type ? (
							<div>
								<div className="px-3 px-lg-0">
									<label className="form-label">Select tag</label>
								</div>
								<CreateArticleSelector
									action={(e) => onTagChange(e)}
									data={menuList.filter((item) => {
										return item.title === category;
									})}
									selected={tag}
									type="tag"
								/>
							</div>
						) : (
							""
						)}

						<div className="d-grid gap-2 d-md-block">
							{tag ? (
								<button type="submit" className="btn btn-success ">
									Post
								</button>
							) : (
								<button
									type="submit"
									className="btn btn-success "
									disabled
								>
									Post
								</button>
							)}
							<button className="btn btn-secondary mx-5">Cancel</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default CreateArticle;
