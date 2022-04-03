import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import starPic from "../../Asset/starPic.png";

export default function MapSingleProduct({ dt }) {
  // love btn
  const [love, setLove] = useState(false);

  return (
    <div
      className="col-6 "
      style={{
        margin: "0px",
        padding: "0px",
      }}
    >
      <div className="">
        <div>
          <div
            className="p-1"
            style={{
              height: "345px",
              margin: "0 auto",
              display: "flex",
            }}
          >
            <div
              className=""
              style={{
                backgroundColor: "white",
              }}
            >
              <img
                style={{
                  width: "100%",

                  borderRadius: "5px 5px 0px 0px ",
                }}
                src={dt.img}
                class=""
                alt="..."
              />
              <div
                className=""
                style={{
                  backgroundColor: "#FFF7BF",
                  borderRadius: "0px 0px 5px 5px",
                  fontSize: "10px",
                  fontFamily: "Poppins",
                  width: "100%",
                  height: "122px",
                  boxShadow: "rgb(213 205 149)  0 3px 7px",
                }}
              >
                <div
                  className="p-1"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Poppins",
                    width: "100%",
                    height: "50px",
                    // backgroundColor: "#FFF7BF",
                  }}
                >
                  <span>{dt.Product_name}</span>
                </div>
                <div
                  className="p-1"
                  style={{ fontSize: "13px", fontFamily: "Poppins" }}
                >
                  <span>SAR </span>
                  <span
                    className=""
                    style={{
                      fontSize: "18px",
                      fontFamily: "Poppins",
                      color: "red",
                    }}
                  >
                    {" "}
                    {/* {dt.discount ? (
                  <strong>
                    <s>{dt.discount}</s>
                  </strong>
                ) : (
                  <strong>
                    <s>{dt.prise}</s>
                  </strong>
                )} */}
                    <strong>{dt.prise}</strong>
                  </span>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style={{ alignItems: "center" }}
                >
                  <div style={{ fontSize: "20px" }}>
                    <FontAwesomeIcon
                      className="p-1 m-1"
                      icon={faHeart}
                      onClick={() => setLove(!love)}
                      style={{
                        color: `${love === true ? "red" : "black"}`,
                        backgroundColor: "",
                        borderRadius: "50%",
                        border: "1px solid white",
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      className="p-1 m-1"
                      style={{
                        backgroundColor: "",
                        borderRadius: "50%",
                        border: "1px solid white",
                      }}
                    />
                  </div>

                  <div
                    className=""
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="d-flex flex-row-reverse bd-highlight ">
                      <div className="d-flex ">
                        <div
                          className="d-flex justify-content-evenly"
                          style={{
                            marginRight: "4px",
                          }}
                        >
                          {dt.reviewStar.length >= 1 ? (
                            dt.reviewStar.map((starNum) => (
                              <div>
                                <img
                                  style={{ width: "14px" }}
                                  src={starPic}
                                  alt=""
                                />
                              </div>
                            ))
                          ) : (
                            <span></span>
                          )}
                        </div>
                      </div>
                      <div
                        className=""
                        style={{
                          fontSize: "10px",
                          display: "flex",
                          marginTop: "3px",
                          alignItems: "flex-start",
                          marginRight: "3px",
                        }}
                      >
                        ({dt.reviewRate})
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
