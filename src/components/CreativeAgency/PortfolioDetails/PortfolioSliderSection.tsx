"use client";

import React from "react";
import { IPortfolioSliderData } from "@/constant/CreativeAgency/PortfolioDetails/portfolio-data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

interface IPortfolioSliderProps {
  data: IPortfolioSliderData[];
}
const PortfolioSliderSection: React.FC<IPortfolioSliderProps> = ({ data: portfolioSliderData }) => {
  return (
    <section className="work-area-9">
      <div className="container">
        <div className="work-area-9-inner section-spacing-bottom">
          <div className="section-header">
            <div className="section-title-wrapper">
              <div className="title-wrapper fade-anim">
                <h2 className="section-title">We Speak Our Languages</h2>
              </div>
            </div>
            <div className="slide-nav fade-anim">
              <div className="work-button-prev slide-nav-button" role="button">
                <i className="fa-solid fa-arrow-left"></i>
              </div>
              <div className="work-button-next slide-nav-button" role="button">
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>

          <div className="works-wrapper-box fade-anim">
            <div className="works-wrapper">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                loop={false}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                slidesPerView={1}
                spaceBetween={30}
                speed={1800}
                navigation={{
                  prevEl: ".work-button-prev",
                  nextEl: ".work-button-next",
                }}
                breakpoints={{
                  300: { slidesPerView: 2 },
                  576: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  992: { slidesPerView: 4 },
                  1201: { slidesPerView: 5 },
                  1367: { slidesPerView: 5 },
                }}
                className="work-slider">
                {portfolioSliderData?.map((project: IPortfolioSliderData, index: number) => (
                  <SwiperSlide key={index}>
                    <div className="work-box-9">
                      <div className="thumb">
                        <div>
                          <Image src={project?.image} alt="project image" width={500} height={500} style={{ objectFit: "contain" }} />
                        </div>
                        <div className="content">
                          <h3 className="title">{project?.title}</h3>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default PortfolioSliderSection;
