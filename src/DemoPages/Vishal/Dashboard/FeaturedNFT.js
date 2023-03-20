import React from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";


// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";


import { Link } from "react-router-dom";

import { creatorsData, creatorsListData } from "./data/index";

const FeaturedNFT = () => {
  return (
    <React.Fragment>
      <Card>

        <Row>
          <CardBody>
            <div className="d-flex pt-2 pb-4">
              <h5 className="card-title fs-18 mb-1">Top Users</h5>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              slidesPerView={2}
              spaceBetween={10}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 15,
                },
              }}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              className="mySwiper marketplace-swiper rounded gallery-light"
            >
              <div className="swiper-wrapper">
                {creatorsListData.map((item, key) => (
                  <SwiperSlide key={key}>
                    <div className="card explore-box card-animate rounded">
                      <img src={item.cardImg} alt="" className=" card-img-top" height="120" />
                      <div className="card-body text-center">
                        <img src={item.img} alt="" className="avatar-md rounded-circle object-cover mt-n5 img-thumbnail border-light mx-auto d-block" />
                        <Link >
                          <h5 className="mt-2 mb-1">{item.title}</h5>
                        </Link>
                        <p className="text-muted mb-2">{item.products} Points</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>

            </Swiper>
          </CardBody>
        </Row>
      </Card>

    </React.Fragment>
  );
};

export default FeaturedNFT;
