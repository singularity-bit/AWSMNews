import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { v4 as uuidv4 } from "uuid";
export const menuList = [
  {
    title: "News",
    path: "/news",
    categories: [
      "Justitie",
      "Social",
      "Extern",
      "Politic",
      "Economic",
      "Diverse",
      "Comunicate de presa",
    ],
    expanded: false,
  },
  {
    path: "/investigations",
    title: "Investigations",
    categories: ["Ancheta", "Dosar", "Povesti din spatele investigatiei"],
    expanded: false,
  },
  {
    path: "/video",
    title: "Video",
    categories: ["Anchete", "Reportaj", "Vox", "Stop-cadru"],
    expanded: false,
  },
  {
    path: "/special",
    title: "Special Reports",
    categories: ["Reportaje", "Oameni", "Fotoreportaje", "Interviuri"],
    expanded: false,
  },
  {
    path: "/blog",
    title: "Blog",
    categories: ["Podcast", "Diaspora", "Editoriale", "Diverse"],
    expanded: false,
  },
  {
    path: "/consultant",
    title: "Consultant",
    categories: ["Juridic", "Politic", "Social"],
    expanded: false,
  },
  {
    path: "/about",
    title: "About",
    expanded: false,
  },
];
function Menu() {
  const [expanded, setExpanded] = useState(menuList);

  //displaying the menu list
  const showList = (list) => {
    return list.map((item, index) => {
      return (
        <li className="nav-item dropdown px-3 rounded-0" key={uuidv4()}>
          <Link
            to={item.path}
            className="nav-link dropdown-toggle fw-bolder fs-6 text-dark"
            id="navbarDarkDropdownMenuLink"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
            key={uuidv4()}
          >
            {item.title}
          </Link>
          <ul
            className={item.categories ? "dropdown-menu" : ""}
            aria-labelledby="navbarDarkDropdownMenuLink"
          >
            {item.categories?.map((category, index) => {
              return (
                <Link
                  to={`${item.path}/${category}`}
                  className="text-decoration-none text-reset"
                  key={uuidv4()}
                >
                  <li key={uuidv4()}>
                    <a
                      className={
                        item.categories.length === index + 1
                          ? "dropdown-item "
                          : "dropdown-item border-bottom"
                      }
                    >
                      {category}
                    </a>
                  </li>
                </Link>
              );
            })}
          </ul>
        </li>
      );
    });
  };
  return (
    <nav className="container navbar  navbar-expand-lg border-bottom border-dark ">
      <div className="d-flex justify-content-around ">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDarkDropdown"
          aria-controls="navbarNavDarkDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav">{showList(expanded)}</ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
