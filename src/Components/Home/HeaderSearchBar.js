import {
  faCartShopping,
  faHeart,
  faMagnifyingGlass,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useHistory } from "react-router-dom";
import queenz_zone_logo from "../../Asset/queenz_zone_logo.png";

export default function HeaderSearchBar() {
  let history = useHistory();

  const optionName = (props) => {
    console.log();

    history.push(`/${props}`);
  };
  return (
    <div>
      <div
        className="p-2 w-100 d-flex align-items-center justify-content-around"
        style={{ height: "60px", backgroundColor: "#FEC400" }}
      >
        <div style={{ marginRight: "0px" }}>
          <img src={queenz_zone_logo} className="img-fluid" alt="ded" />
        </div>
        <div
          className="d-flex justify-content-evenly"
          style={{ padding: "0px 10px" }}
        >
          <div className="input-group ">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ borderRadius: "10px 0 0 10px" }}
            />
            <button
              style={{
                borderRadius: "0px 10px 10px 0px",
                backgroundColor: "#FFF080",
                fontSize: "18px",
                fontFamily: "Poppins",
              }}
              className="input-group-text"
              id="basic-addon2"
            >
              <FontAwesomeIcon
                style={{ paddingLeft: "0" }}
                icon={faMagnifyingGlass}
              />
            </button>
          </div>
          <div
            className="d-flex align-items-center"
            style={{ fontSize: "20px" }}
          >
            <div
              className=""
              style={{ margin: "0px 15px", paddingLeft: "5px" }}
              onClick={() => optionName("MyMessage")}
            >
              <div ClassName="" style={{ position: "relative" }}>
                <FontAwesomeIcon icon={faMessage} />
                <div
                  style={{
                    position: "absolute",
                    top: "-10px",
                    fontSize: "14px",
                    borderRadius: "100%",
                    backgroundColor: "#fec400",
                    padding: "2px",
                    right: "-4px",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                  }}
                >
                  <span>5</span>
                </div>
              </div>
            </div>
            <div onClick={() => optionName("Favorite")} className="" style={{}}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div
              className=""
              onClick={() => optionName("ShoppingCard")}
              style={{ margin: "0px 10px" }}
            >
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
