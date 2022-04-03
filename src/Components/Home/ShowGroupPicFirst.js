import React from "react";
import pic from "../../Asset/MaskGroup4.png";

export default function ShowGroupPicFirst() {
  const demoPicTest = () => {
    console.log("pic clicked");
  };
  return (
    <div>
      <div className="" style={{ backgroundColor: "#FEC400" }}>
        <div className="d-flex justify-content-around">
          <div className="p-1">
            <img
              onClick={() => demoPicTest()}
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
              src={pic}
              style={{ width: "300px" }}
              className="img-fluid "
              alt="..."
            ></img>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              className="img-fluid "
              alt="..."
            ></img>
          </div>
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              className="img-fluid "
              alt="..."
            ></img>
          </div>
          <div className="p-1">
            <img
              src={pic}
              style={{ width: "300px" }}
              className="img-fluid "
              alt="..."
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
