import React from "react";

// import Swiper core and required modules
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
    EffectCoverflow,
} from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "../sass/App.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { projects } from "../projectsDetails";

import ProjectContainer from "./ProjectContainer";

import "bootstrap/dist/css/bootstrap.min.css";

const Projects = ({ darkMode, t }) => {
    return (
        <div className="Projects p-3 m-md-5 m-xs-1 ">
            <h1 className="p-3 text-center">
                <a id="projects">{t("projects")}</a>
            </h1>
            <Swiper
                modules={[
                    Navigation,
                    Pagination,
                    Scrollbar,
                    A11y,
                    Autoplay,
                    EffectCoverflow,
                ]}
                effect={"coverflow"}
                spaceBetween={1}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                data-swiper-autoplay="2000"
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
            >
                {projects.map((project) => (
                    <SwiperSlide>
                        <ProjectContainer
                            key={project.key}
                            image={project.image}
                            title={project.title}
                            text={project.text}
                            badges={project.badges}
                            icons={project.icons}
                            darkMode={darkMode}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Projects;
