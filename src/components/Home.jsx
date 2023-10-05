import React from "react";
import "../components/Home.css";
// import iphone from "../assest/iphone.png";
import iphone from "../assets/iphone.png"

const Home = () => {
  return (
    <div>
      <div className="home-bg">
        <div className="home-container">
          <div className="home-one" style={{ marginTop: "110px" }}>
            <h1 class="h4 text-center text-white">
              COTTON &amp; YARN SELLING AND BUYING PLATFORM
            </h1>
            <form
              class="movers-form pt-2"
              method="post"
              enctype="multipart/form-data"
            >
              <input type="hidden" name="submit_type" value="search" />
              <div class="input-group mb-5 mt-4">
                <input
                  type="text"
                  name="search_value"
                  class="form-control border-1"
                  placeholder="Find Buyer, Seller and products"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  style={{ width: "100px" }}
                  required=""
                />
                {/* <button
                  class="btn bg-c-main text-white rounded-0 border-0"
                  type="submit"
                  id="button-addon2"
                >
                  Search
                </button> */}
                <button className="home-butt" type="submit" style={{ padding: "1px 10px", border: "none", backgroundColor: "#AC7E64", color: "white" }}>Search</button>

              </div>
            </form>
            <p class="text-center text-white">
              Stay up-to-date with the latest information on our selling,
              buying, offers, news, and spot prices.
            </p>
            <h2 class="text-center text-white">Download App Now!</h2>
            <div class="text-center">
              <a
                target="_blank"
                href="https://play.google.com/store/apps/details?id=io.linnseed.sale "
              >
                <img
                  src="https://www.linnseed.com/front_assets/HomeResource/playstore.png"
                  width="200px"
                />
              </a>
              <a
                target="_blank"
                href="https://apps.apple.com/us/app/linnseed/id1660691693  "
              >
                <img
                  src="https://www.linnseed.com/front_assets/HomeResource/appstore.png"
                  width="210px"
                />
              </a>
            </div>
          </div>
          <div className="home-two">
            <img
              src={iphone}
              alt=""
              style={{ height: "480px", width: "550px", paddingLeft: "100px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
