import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Common from "../components/Common";

function ForSellerPage() {
  return (
    <div>
      <Header />
      <Navbar/>
      <Common user="Seller"/>
    </div>
  );
}

export default ForSellerPage;
