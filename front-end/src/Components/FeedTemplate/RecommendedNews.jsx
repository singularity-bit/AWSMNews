import React, { useState } from "react";
import StandardCard from "../Cards/StandardCard";
import WithNewsCard from "../../HOC/withNewsCard";
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";
const Card = WithNewsCard(StandardCard);

function RecommendedNews({ data, type, isLoading }) {
  let [color, setColor] = useState("black");
  const override = css`
    display: block;
    margin: auto auto;
    border-color: black;
  `;

  return isLoading ? (
    <PuffLoader color={color} loading={isLoading} css={override} size={60} />
  ) : (
    <div className="container bg-transparent">
      <div className="row">
        <div className="col">
          <Card article={data[0]} type={type}></Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card article={data[1]} type={type}></Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card article={data[2]} type={type}></Card>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Card article={data[3]} type={type}></Card>
        </div>
      </div>
    </div>
  );
}

export default RecommendedNews;
