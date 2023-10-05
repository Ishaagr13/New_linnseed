import React from "react";
import '../components/Contact.css';
// import cotton from "../assest/cotton.jpg";

const Contact = () => {
  return (
    <div>
      <section class="contact-us-bg">
        {/* <img src={cotton} alt="" /> */}
          <div className="row d-flex justify-content-center pt-5 pb-5 contact-bg">
            <div class="col-md-8">
              <div class="card rounded-0 shadow border-0">
                <div class="card-header bg-transparent border-0 mt-4">
                  <h2 class="text-center text-c-main">Contact Us</h2>
                </div>
                <div class="card-body">
                  <form
                    method="post"
                    class="mt-2 col-md-12"
                    enctype="multipart/form-data"
                    id="contact-form"
                  >
                    <div class="row p-2">
                      <input
                        type="hidden"
                        name="submit_type"
                        value="contact_us"
                      />
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="company_name" class="form-label">
                            Company Name
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="company_name"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="city" class="form-label">
                            City
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="city"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="state" class="form-label">
                            State
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="state"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="country" class="form-label">
                            Country
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="country"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="company_url" class="form-label">
                            Company URL
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="company_url"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="mb-3">
                          <label for="phone_number" class="form-label">
                            Phone Number
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="phone_number"
                            value=""
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="mb-3 pt-4 d-flex justify-content-center">
                          <button
                            type="submit"
                            class="btn btn-dark bg-c-grayblue border-0 rounded-0 me-2"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        <div
          class="modal rounded-0 fade"
          id="blog1Modal"
          tabindex="-1"
          aria-labelledby="blog1ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog rounded-0  modal-lg modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="blog1ModalLabel">
                  Cotton: The “White Gold” of 2021 For Farmers &amp; Trading
                  Community
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  In 2021, the Indian trading and farming communities had made
                  substantial profits. Since May 2020, cotton has provided good
                  results. Cotton has had a strong increase of around 65 percent
                  in 2021, hitting new highs. This product is often referred to
                  as "White Gold." Gold is frequently bought and stored with the
                  intention of making a profit in the long run.
                </p>
                <p>
                  Cotton prices in India have risen as a result of strong
                  domestic and worldwide demand, as well as fewer supplies. The
                  basket had lost its rising momentum after the first week of
                  November, owing to a faster rate of new season arrivals.
                </p>
                <p>
                  Cotton prices in India have steadied in recent weeks and have
                  begun to rise on an optimistic assessment of export/domestic
                  demand for cotton/cotton goods. Cotton prices in India have
                  recovered from the bearish period after November, as arrival
                  pressure began to ease. It's worth noting that since May 2020,
                  the MCX cotton index has been heading upwards. After touching
                  a low of Rs.14800/bale in May 2020, the benchmark contract
                  closed near Rs.34000/bale in 2021.
                </p>
                <p>
                  According to latest data, global cotton production in market
                  year (MY) 2019-20 was 26.43 million metric tonnes, down 7.60
                  percent from MY 2020-21 to 24.42 million metric tonnes. Cotton
                  exports in the world totaled 8.98 million metric tonnes in MY
                  2019-20, rising 17.37 percent to 10.54 million metric tonnes
                  in MY 2020-21. From 22.44 million metric tonnes in MY 2019-20
                  to 26.32 million metric tonnes in MY 2020-21, worldwide cotton
                  consumption increased by 17.29%. These factors are expected to
                  keep global cotton prices on the rise in 2021.
                </p>
                <p class="fw-bold">Another Good Year for Farmers:</p>
                <p>
                  Cotton consumption has been steadily increasing in India,
                  Pakistan, Mexico, and Bangladesh, owing to rising demand and
                  the impact of COVID-19 being mitigated. The worldwide cotton
                  balance sheets for 2021/22 show increased production and
                  consumption, as well as somewhat lower ending stocks, when
                  compared to 2020-2021. Global consumption is expected to
                  increase by 700,000 bales. In 2022, global ending stocks are
                  expected to be 86.9 million bales, down 2.4 million bales from
                  2021. Cotton production in India is expected to be 330 lakh
                  bales in 2021-22, down about 30-35 lakh bales from 2020-21.
                  Due to severe rains in November in the growing regions of
                  Maharashtra and the south, the Indian crop's production
                  prognosis has been decreased. Another reason for the lower
                  crop prediction is pest assault in North India. Domestic
                  prices are comfortable setting new highs while the global
                  markets retain their solid trend. As of December 28, managed
                  money firms were 74,825 contracts net long in cotton,
                  according to the CFTC's weekly report. The long positions were
                  increased by 4,039 contracts, owing to price-favoring
                  conditions in US cotton. Domestic consumption prognosis for
                  the cotton complex basket, i.e. cotton seed/cotton fibre,
                  cotton wash oil, cotton cake, etc., is improving as export
                  prospects for cotton products remain positive and economic
                  recovery continues. Overall, the cotton industry will have
                  another strong year for farmers and other value chain
                  participants.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal rounded-0 fade"
          id="blog2Modal"
          tabindex="-1"
          aria-labelledby="blog2ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog rounded-0  modal-lg modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="blog2ModalLabel">
                  Availability of cotton, rising prices worry textile industry
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Cotton prices are really high. This season has become a source
                  of anxiety for the local textile industry, as units are seeing
                  not only a rise in raw material prices, but also a scarcity of
                  supplies.
                </p>
                <p>
                  In a press release, T. Rajkumar, chairman of the Confederation
                  of Indian Textile Industry, stated that the average price of
                  cotton in September 2020 was 37,000 per candy (355 kg) and
                  jumped to 60,000 in October 2021, when the new cotton season
                  began. The price reached a high of 70,000 on December 31.
                  Furthermore, between October 1 and December 31, only roughly
                  120 lakh bales landed in the market, compared to the average
                  inflow of 170 lakh to 200 lakh bales.
                </p>
                <p>
                  The chairman of the Southern India Mills' Association, Ravi
                  Sam, stated that the cotton crop for 2021-2022 is expected to
                  be good.
                </p>
                <p>
                  "It may be noted that the 11 percent total import duty
                  existing on cotton has been the reason for the cartelisation
                  of vested players to increase domestic cotton prices, making
                  an abnormal profit at the cost of value added garment
                  sectors," said Raja Shanmugham, president of Tiruppur
                  Exporters' Association.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="modal rounded-0 fade"
          id="blog3Modal"
          tabindex="-1"
          aria-labelledby="blog3ModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog rounded-0  modal-lg modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="blog2ModalLabel">
                  Availability of cotton, rising prices worry textile industry
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <p>
                  Cotton prices are really high. This season has become a source
                  of anxiety for the local textile industry, as units are seeing
                  not only a rise in raw material prices, but also a scarcity of
                  supplies.
                </p>
                <p>
                  In a press release, T. Rajkumar, chairman of the Confederation
                  of Indian Textile Industry, stated that the average price of
                  cotton in September 2020 was 37,000 per candy (355 kg) and
                  jumped to 60,000 in October 2021, when the new cotton season
                  began. The price reached a high of 70,000 on December 31.
                  Furthermore, between October 1 and December 31, only roughly
                  120 lakh bales landed in the market, compared to the average
                  inflow of 170 lakh to 200 lakh bales.
                </p>
                <p>
                  The chairman of the Southern India Mills' Association, Ravi
                  Sam, stated that the cotton crop for 2021-2022 is expected to
                  be good.
                </p>
                <p>
                  "It may be noted that the 11 percent total import duty
                  existing on cotton has been the reason for the cartelisation
                  of vested players to increase domestic cotton prices, making
                  an abnormal profit at the cost of value added garment
                  sectors," said Raja Shanmugham, president of Tiruppur
                  Exporters' Association.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
