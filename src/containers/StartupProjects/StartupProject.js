import React, { useContext } from "react";
import "./StartupProjects.scss";
// import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function StartupProject({projects}) {
    function openUrlInNewTab(url) {
        if (!url) {
            return;
        }
        var win = window.open(url, "_blank");
        win.focus();
    }

    const { isDark } = useContext(StyleContext);
    if (!projects.display) {
        return null;
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="projects">
                <div>
                    <h1 className="skills-heading">{projects.title}</h1>
                    <p
                        className={
                            isDark
                                ? "dark-mode project-subtitle"
                                : "subTitle project-subtitle"
                        }
                    >
                        {projects.subtitle}
                    </p>

                    <div className="projects-container">
                        {projects.projects.map((project, i) => {
                            return (
                                <div
                                    key={i}
                                    className={
                                        isDark
                                            ? "dark-mode project-card project-card-dark"
                                            : "project-card project-card-light"
                                    }
                                >

                                    <div>
                                        {
                                            project.image ? (
                                            <>
                                                <div className="project-image">
                                                    <img
                                                        src={project.image}
                                                        alt={project.projectName}
                                                        className="card-image"
                                                    ></img>
                                                </div>
                                                <div>
                                                    <h5
                                                        className={isDark ? "dark-mode card-title" : "card-title"}
                                                    >
                                                        {project.projectName}
                                                    </h5>
                                                </div>
                                            </>
                                        ) : null}
                                        {
                                            project.projectDescriptions.map((desc, i) => {
                                                return (
                                                    <p
                                                        key={i}
                                                        className={
                                                            isDark
                                                                ? "dark-mode card-subtitle"
                                                                : "card-subtitle"
                                                        }
                                                    >
                                                        {desc}
                                                    </p>
                                                );
                                            })
                                        }
                                    </div>



                                    <div className="project-detail">
                                        {/* <h5
                                            className={isDark ? "dark-mode card-title" : "card-title"}
                                        >
                                            {project.projectName}
                                        </h5> */}
                                        {/* {
                                            project.projectDescriptions.map((desc, i) => {
                                                return (
                                                    <p
                                                        key={i}
                                                        className={
                                                            isDark
                                                                ? "dark-mode card-subtitle"
                                                                : "card-subtitle"
                                                        }
                                                    >
                                                        {desc}
                                                    </p>
                                                );
                                            })
                                        } */}
                                        <div className="box">
                                            <Carousel useKeyboardArrows={true}>
                                                {project.images.map((URL, index) => (
                                                    <div className="slide">
                                                        <img alt="sample_file" src={URL} key={index} />
                                                    </div>
                                                ))}
                                            </Carousel>
                                        </div>
                                        <p
                                            key={i}
                                            className={
                                                isDark
                                                    ? "dark-mode card-subtitle"
                                                    : "card-subtitle"
                                            }
                                        >
                                            {project.keywords.join(" | ")}
                                        </p>
                                        {/* <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p> */}
                                        {project.footerLink ? (
                                            <div className="project-card-footer">
                                                {project.footerLink.map((link, i) => {
                                                    return (
                                                        <span
                                                            key={i}
                                                            className={
                                                                isDark ? "dark-mode project-tag" : "project-tag"
                                                            }
                                                            onClick={() => openUrlInNewTab(link.url)}
                                                        >
                                                            {link.name}
                                                        </span>
                                                    );
                                                })}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Fade>
    );
}
