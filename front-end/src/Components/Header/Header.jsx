import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faSearch,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import SignIn from "../SignIn";

function Header() {
  const [query, setQuery] = useState("");
  const history = useHistory();
  const [openModal, setOpenModal] = useState(false);

  const onSeach = (e) => {
    setQuery(e.target.value);
  };
  const onSubmit = (e) => {
    if ((e.key === "Enter") | (e.type === "click")) {
      history.push({
        pathname: `/search/${query}`,
        state: { detail: query },
      });
      setQuery("");
    }
  };

  const OpenModal = () => {
    setOpenModal(!openModal);
  };
  useEffect(() => {
    setQuery("");
  }, []);
  return (
    <header className="navbar  sticky-top  navbar-light p-0 position-relative">
      <SignIn isOpen={openModal} />
      <div className="container d-flex justify-content-between  py-3 border-bottom border-1 p-0">
        <div className="btn-toolbar d-flex align-items-center" role="toolbar">
          <div className="btn-group ">
            <button type="button" className="btn btn-dark rounded-0 m-0">
              <span className="font-monospace fw-bolder p-3">SUBSCRIBE</span>
            </button>
          </div>
          <div className="btn-group px-2">
            <a className="text-decoration-none text-dark" href="#">
              <FontAwesomeIcon icon={faNewspaper} className="mx-2 " /> Send news
            </a>
          </div>
        </div>

        <Link to="/" className="navbar-brand mb-0 fs-1 fw-bold">
          AWSMNews{" "}
        </Link>

        <div className="d-flex">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="search..."
              value={query}
              onChange={onSeach}
              onKeyPress={onSubmit}
            ></input>
            <button
              className="input-group-text bg-transparent"
              id="basic-addon1"
              onClick={onSubmit}
            >
              <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </button>
          </div>
          <button
            className="input-group-text bg-transparent border-0 mx-3"
            id="basic-addon2"
            onClick={OpenModal}
          >
            <FontAwesomeIcon
              icon={faSignInAlt}
              color={"grey"}
              size={"2x"}
            ></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
