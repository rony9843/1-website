import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import "./ShowProductCategory.css";
import SingleProductHomePage from "./SingleProductHomePage";

export default function ShowProductCategory() {
  let history = useHistory();

  const allProductList = [
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Black Black Black Black Bag",
      prise: "57",
      discount: "42",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "4", "5"],
      reviewRate: "423",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "2", "3", "4", "5"],
      reviewRate: "4",
    },
    {
      img: "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg",
      Product_name: "Black Bag",
      prise: "57",
      reviewStar: ["1", "4", "5"],
      reviewRate: "4",
    },
  ];

  return (
    <div>
      <div className="">
        <div class="d-flex justify-content-between">
          <div
            className="p-2 m-3 mt-4 "
            style={{
              borderRadius: "5px",
            }}
          >
            <span
              className="d-flex justify-content-center"
              style={{
                fontSize: "16",
                fontFamily: "Poppins",
                fontWeight: "600",
                margin: "",
              }}
            >
              Catagary : <strong> Jewelry</strong>
            </span>
          </div>
          <div
            className="p-2 m-3 mt-4 "
            style={{
              width: "100px",
              boxShadow: "rgb(213 205 149)  0 3px 7px",
              borderRadius: "5px",
              backgroundColor: "#FFF7BF",
            }}
            onClick={() => history.push("/Cloth")}
          >
            <span
              className="d-flex justify-content-center"
              style={{
                fontSize: "16",
                fontFamily: "Poppins",
                fontWeight: "600",
                margin: "",
              }}
            >
              See More
            </span>
          </div>
        </div>

        <div className="" style={{ backgroundColor: "#fff7bf" }}>
          <div className="d-flex justify-content-around">
            <div className="p-1">
              <img
                src={
                  "https://i.ibb.co/Y2rTPPP/pexels-skylar-kang-6044266-Cropped.jpg"
                }
                style={{
                  width: "300px",
                  objectFit: "cover",
                }}
                className="img-fluid "
                alt="..."
              ></img>
            </div>

            <div className="p-1">
              <img
                src={
                  "https://i.ibb.co/DYS2fpS/pexels-leah-kelley-691046-Cropped.jpg"
                }
                style={{ width: "300px", objectFit: "cover" }}
                className="img-fluid "
                alt="..."
              ></img>
            </div>

            <div className="p-1">
              <img
                src="https://i.ibb.co/DYS2fpS/pexels-leah-kelley-691046-Cropped.jpg"
                style={{ width: "300px" }}
                className="img-fluid "
                alt="..."
              ></img>
            </div>
          </div>
        </div>

        <div
          className="p-2 productHomepage"
          style={{
            width: "100%",

            display: "flex",
            overflow: "scroll",
          }}
        >
          {allProductList.map((dt) => (
            <div>
              <SingleProductHomePage dt={dt}></SingleProductHomePage>
            </div>
          ))}
          <div
            class="d-flex align-items-center p-5"
            onClick={() => history.push("/Cloth")}
          >
            <div
              style={{
                backgroundColor: "#fec400",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              <div class="d-flex align-items-center p-4">
                <div>
                  <strong>See More</strong>
                </div>

                <div className="p-2">
                  <FontAwesomeIcon icon={faAnglesRight} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
