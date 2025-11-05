"use client";
import React from "react";
import Link from "next/link";
import { IProject, WorkData } from "@/constant/CreativeAgency/workTwo";
import NiceSelectWrapper from "@/components/CreativeAgency/NiceSelect/NiceSelectWrapper";
import WorkSlider from "@/components/CreativeAgency/Portfolio/WorkSlider";
import Image from "next/image";

interface WorkProps {
  pageInner?: boolean;
  pageInnerSlider?: boolean;
  type?: boolean | number;
  data: WorkData;
}

const WorkSection: React.FC<WorkProps> = ({ pageInnerSlider, type = false, data: workData }) => {
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Sort by: ${e.target.value}
    console.log(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Category: ${e.target.value}
    console.log(e.target.value);
  };

  const WorkFilter = () => {
    return (
      <div className="section-header">
        <div className="meta fade-anim" suppressHydrationWarning={true}>
          <p className="total-item">All showcases ({workData.projects.length})</p>
        </div>
        <div className="filter-wrapper fade-anim" suppressHydrationWarning={true}>
          <div className="filter-box">
            <NiceSelectWrapper
              id="sort"
              defaultOption="Sort by"
              className="right"
              onChange={handleSortChange}
              options={[
                { value: "name", label: "Name" },
                { value: "date", label: "Date" },
                { value: "tag", label: "Tag" },
              ]}></NiceSelectWrapper>
          </div>
          <div className="filter-box">
            <NiceSelectWrapper
              // name="category"
              id="category"
              className="right"
              defaultOption="Filter by"
              onChange={handleCategoryChange}
              options={[
                { value: "product", label: "Product" },
                { value: "design", label: "Design" },
                { value: "mockup", label: "Mockup" },
                { value: "branding", label: "Branding" },
              ]}></NiceSelectWrapper>
          </div>
        </div>
      </div>
    );
  };

  const WorkAreaInner = () => {
    return (
      <section className={`work-area-${type}`}>
        <div className="container">
          <div className={`work-area-${type}-inner section-spacing`}>
            <WorkFilter />
            <div className="works-wrapper-box fade-anim" suppressHydrationWarning={true}>
              <div
                className="works-wrapper"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                  gap: "40px",
                  alignItems: "start",
                }}>
                {workData?.projects?.map((item, index) => (
                  <div
                    className="work-box fade-anim"
                    key={item?.id}
                    suppressHydrationWarning={true}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                      borderRadius: "12px",
                    }}>
                    {/* Image */}
                    <div
                      className="thumb"
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 9",
                        overflow: "hidden",
                        borderRadius: "12px",
                        boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
                      }}>
                      <div className="meta" style={{ position: "absolute", bottom: "12px", left: "12px", zIndex: 2 }}>
                        {item?.tags?.map((tag, idx) => (
                          <span
                            className="tag"
                            key={idx}
                            style={{
                              background: "rgba(0,0,0,0.5)",
                              color: "#fff",
                              padding: "2px 8px",
                              borderRadius: "6px",
                              fontSize: "12px",
                              marginRight: "6px",
                            }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={item?.link || "#"} target="_blank" rel="noopener noreferrer">
                        <Image
                          src={item?.image}
                          alt={item?.title || "Project image"}
                          width={800}
                          height={450}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "12px",
                          }}
                        />
                      </Link>
                    </div>

                    {/* Content */}
                    <div className="content" style={{ marginTop: "16px", textAlign: "left" }}>
                      <span className={`number ${type === 7 ? "d-none" : ""}`} style={{ opacity: 0.6 }}>
                        {String(index + 1).padStart(2, "0")}
                        <span className="shape">/</span>
                      </span>

                      <h3
                        className="title"
                        style={{
                          fontSize: "20px",
                          fontWeight: 500,
                          marginTop: "8px",
                          marginBottom: "12px",
                          lineHeight: 1.4,
                        }}>
                        <Link href={item?.link || "#"} target="_blank" rel="noopener noreferrer">
                          {item?.title}
                        </Link>
                      </h3>

                      <div
                        className={`t-btn-group ${type === 7 ? "d-none" : ""}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}>
                        <Link className="t-btn t-btn-primary" href={item?.link || "#"} target="_blank" rel="noopener noreferrer">
                          View Full Project
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {!workData?.projects?.length && <p>No projects available at this time.</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const WorkAreaSlider = () => {
    return (
      <section className="work-area-8">
        <div className="container">
          <div className="work-area-8-inner section-spacing">
            <WorkFilter />
            <div className="work-area-2 page-portfolio-3">
              <div className="works-wrapper-box fade-anim" suppressHydrationWarning={true}>
                <div className="works-wrapper">
                  <WorkSlider work={workData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  if (pageInnerSlider) {
    return <WorkAreaSlider />;
  }

  return <WorkAreaInner />;
};

export default WorkSection;
