import React from "react";
import AllProductCatagaryShow from "./AllProductCatagaryShow";
import CarouselHome from "./CarouselHome";
import ShowGroupPicFirst from "./ShowGroupPicFirst";

export default function Layout() {
  return (
    <div className="mb-5 pb-3">
      <CarouselHome></CarouselHome>
      <ShowGroupPicFirst></ShowGroupPicFirst>
      <AllProductCatagaryShow></AllProductCatagaryShow>
    </div>
  );
}
