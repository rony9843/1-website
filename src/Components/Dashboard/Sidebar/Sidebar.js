import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import logo from "../../../Asset/queenz_zone_logo.png";

export default function Sidebar() {
  // useState for option select
  const [optionSelectState, setOptionSelectState] = useState("");

  // option select
  const optionSelect = (props) => {
    console.log(props);
    setOptionSelectState(props);
  };

  return (
    <div>
      <div>
        <div style={{ backgroundColor: "#FEC400", height: "100vh" }}>
          <div>
            <div class="d-flex justify-content-evenly">
              <div>
                <img style={{ width: "68px" }} src={logo} alt="" />
              </div>
              <div>
                <div style={{ fontWeight: "700", fontSize: "20px" }}>
                  Dashboard
                </div>
                <div class="d-flex justify-content-center">
                  {" "}
                  <div style={{ fontSize: "20px" }}>Admin</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <hr
                style={{
                  width: "144px",
                  height: "3px",
                  color: "#F4ECB6",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div
              onClick={() => optionSelect("order")}
              style={{
                padding: `${optionSelectState === "order" ? "4px" : "8px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "order"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Porduct Details")}
              style={{
                padding: `${
                  optionSelectState === "Porduct Details" ? "4px" : "8px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "Porduct Details"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Porduct Details
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Add Product")}
              style={{
                padding: `${
                  optionSelectState === "Add Product" ? "4px" : "8px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  backgroundColor: ` ${
                    optionSelectState === "Add Product"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Add Product
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("Stock")}
              style={{
                padding: `${optionSelectState === "Stock" ? "4px" : "8px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                  backgroundColor: ` ${
                    optionSelectState === "Stock"
                      ? " rgb(255 240 128 / 60%)"
                      : "rgb(254, 196, 0)"
                  }  `,
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Stock
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("offer")}
              style={{
                padding: `${optionSelectState === "offer" ? "4px" : "8px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  offer
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("ordfder")}
              style={{
                padding: `${optionSelectState === "ordfder" ? "4px" : "8px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("orrtyryder")}
              style={{
                padding: `${
                  optionSelectState === "orrtyryder" ? "4px" : "8px"
                }`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
            <div
              className=""
              onClick={() => optionSelect("ordasdder")}
              style={{
                padding: `${optionSelectState === "ordasdder" ? "4px" : "8px"}`,
              }}
            >
              <div
                class="d-flex justify-content-start p-2 "
                style={{
                  height: "35px",
                  cursor: "pointer",
                }}
              >
                <div>
                  <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="fw-bold" style={{ marginLeft: "10px" }}>
                  Order
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
