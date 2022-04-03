import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import starPic from "../../Asset/starPic.png";

export default function SingleProductHomePage({ dt }) {
  // love btn
  const [love, setLove] = useState(false);
  return (
    <div>
      <div>
        <div
          className="p-1"
          style={{
            backgroundColor: "#FFF7BF",

            margin: "0px 5px",
            borderRadius: "5px",
          }}
        >
          <div
            className="m-1"
            style={{
              backgroundColor: "white",
              height: "280px",
            }}
          >
            <img
              style={{
                width: "145px",
                height: "145px",
                borderRadius: "5px 5px 0px 0px ",
              }}
              src={dt.img}
              class=""
              alt="..."
            />
            <div
              className="p-1"
              style={{
                fontSize: "15px",
                fontFamily: "Poppins",
                width: "145px",
                height: "58px",
              }}
            >
              <span>{dt.Product_name}</span>
            </div>
            <div
              className=""
              style={{
                fontSize: "14px",
                fontFamily: "Poppins",
                paddingLeft: "5px",
              }}
            >
              <span>SAR </span>
              <span className="" style={{ color: "red", fontSize: "18px" }}>
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
            {/* <div
              className=""
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className="d-flex flex-row-reverse bd-highlight ">
                <div className="d-flex ">
                  <div className="d-flex justify-content-evenly">
                    {dt.reviewStar.length >= 1 ? (
                      dt.reviewStar.map((starNum) => (
                        <div>
                          <img src={starPic} alt="" />
                        </div>
                      ))
                    ) : (
                      <span></span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  ({dt.reviewRate})
                </div>
              </div>
            </div> */}
            <div
              className="d-flex justify-content-end"
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
            <div className="">
              <div
                class="d-flex justify-content-between"
                style={{ alignItems: "center" }}
              >
                <div style={{ fontSize: "18px" }}>
                  <FontAwesomeIcon
                    className=""
                    icon={faHeart}
                    onClick={() => setLove(!love)}
                    style={{
                      color: `${love === true ? "red" : "black"}`,
                      backgroundColor: "",
                      borderRadius: "50%",
                      border: "1px solid white",
                      margin: "0px 5px",
                    }}
                  />
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className=""
                    style={{
                      backgroundColor: "",
                      borderRadius: "50%",
                      border: "1px solid white",
                      margin: "0px 5px",
                    }}
                  />
                </div>

                <div className="" style={{}}>
                  <div className=" ">
                    <div className="">
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
                                style={{ width: "13px" }}
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
