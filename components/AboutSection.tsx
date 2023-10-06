"use client";
import React, { memo } from "react";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const skills = [
  { skill: "Spring-FrameWork" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Node JS" },
  { skill: "TypeScript" },
  { skill: "Hibernate V5.5" },
  { skill: "Express JS" },
  { skill: "AEM V6.5" },
  { skill: "Java" },
  { skill: "Less/Tailwind CSS" },
  { skill: "Socket.io" },
  { skill: "HTML" },
  { skill: "JavaScript" },
  { skill: "System Design" },
  { skill: "Algorithms" },
  { skill: "CSS" },
  { skill: "Git" },
];

const AboutSection = () => {
  const [expandedSection, setExpandedSection] = React.useState<boolean>(false);
  return (
    <section id="about" className="h-full fade fadeOut" tabIndex={1}>
    <div className="my-12 h-max pb-10 md:pt-14 md:pb-46">
      <h1 className="text-center font-bold text-4xl">
        About Me
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
  
      <p
        className={`flex flex-col space-y-10 items-stretch justify-center align-top  md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left overflow-hidden text-xl leading-7 mb-4 h-fit ${
          expandedSection ? "max-h-960  text-neutral-200" : "max-h-80  text-neutral-400"
        }  overflow-auto transition-max-height`}
      >
        <div className={`md:w-1/2  overflow-auto `}>
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>
          <p>
            {"👋"} Hello, {"I'm"} Harsh, a{" "}
            <span className="font-bold">{"highly ambitious"}</span> and
            <span className="font-bold">{" self-motivated"}</span> software
            engineer based in Delhi, India.
          </p>
          <br />
          <p>
            Since my college days, {"I had"} strong passion for technology. {"🔍"}{" "}
            I was exploring the world of mobile performance improvement by rooting
            them and even managed to hack my {"college's"} Wi-Fi networks. 🤫
          </p>
          <br />
          <p>
            {"🚀"} This deep interest and enthusiasm in software led me to pursue
            a career in this field.
          </p>
          <br />
  
          <p>
            Alongside my professional journey, I have a diverse range of hobbies
            and passions that keep me engaged.
          </p>
  
          <br />
          <p>
            Whether it{"`"}s playing sports {"⚽"}, making tech related videos in
            youtube/instagram, traveling {"✈️, "} or exploring new aspects of
            myself, I am always seeking fresh experiences in life and
            opportunities to learn.
          </p>
          <br />
          <p>
            I firmly believe in{" "}
            <span className="font-bold text-teal-500">continuous growth</span> and{" "}
            <span className="font-bold text-teal-500">
              constantly pushing the boundaries
            </span>{" "}
            of what is possible.
          </p>
          <br />
          <p>
            Technology {"💡"} is my passion, and I am excited to see where my
            career takes me.
          </p>
          <br />
  
          <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
            Get to know me!
          </h1>
          <p>
            {"👋"} Hello, {"I'm"} Harsh, a{" "}
            <span className="font-bold">{"highly ambitious"}</span> and
            <span className="font-bold">{" self-motivated"}</span> software
            engineer based in Delhi, India.
          </p>
          <br />
          <p>
            Since my college days, {"I had"} strong passion for technology. {"🔍"}{" "}
            I was exploring the world of mobile performance improvement by rooting
            them and even managed to hack my {"college's"} Wi-Fi networks. 🤫
          </p>
          <br />
          <p>
            {"🚀"} This deep interest and enthusiasm in software led me to pursue
            a career in this field.
          </p>
          <br />
  
          <p>
            Alongside my professional journey, I have a diverse range of hobbies
            and passions that keep me engaged.
          </p>
  
          <br />
          <p>
            Whether it{"`"}s playing sports {"⚽"}, making tech related videos in
            youtube/instagram, traveling {"✈️, "} or exploring new aspects of
            myself, I am always seeking fresh experiences in life and
            opportunities to learn.
          </p>
          <br />
          <p>
            I firmly believe in{" "}
            <span className="font-bold text-teal-500">continuous growth</span> and{" "}
            <span className="font-bold text-teal-500">
              constantly pushing the boundaries
            </span>{" "}
            of what is possible.
          </p>
          <br />
          <p>
            Technology {"💡"} is my passion, and I am excited to see where my
            career takes me.
          </p>
          <br />
          <p>
            Currently, I am open to new opportunities and eagerly embracing the
            next chapter of my professional journey. 🙂
          </p>
        </div>
        <div className="text-center  md:w-1/2 md:text-left">
          <h1 className="text-2xl font-bold mb-6">Tech Stack</h1>
          <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
            {skills.map((item, idx) => {
              return (
                <a
                  key={idx}
                  className="noBlackShadow bg-teal-600 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                >
                  {item.skill}
                </a>
              );
            })}
          </div>
        </div>{" "}
      </p>
  
      <button
        onClick={() => setExpandedSection((a) => !a)}
        className="text-teal-500 hover:underline cursor-pointer"
      >
        {expandedSection ? "Read Less" : "Read More"}
      </button>
      <div className="flex flex-row pt-5 items-center text-center justify-center fade fadeOut ">
    <Link to="projects" activeClass="active" spy={true} className="noBlackShadow mb-10" smooth={true} offset={-100} duration={500}>
      <HiArrowDown size={35} className="animate-bounce" />
    </Link>
  </div>

    </div>
  </section>);
};

export default memo(AboutSection);
