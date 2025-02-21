import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "/public/images/image.png";
import image2 from "/public/images/image2.png";

const Projects = () => {
  const projects = [
    {
      image: image1,
      name: "To-Do-List",
      git_hub: "https://github.com/anonimka05/To-do-List",
      link_project: "https://to-do-list-iota-gray.vercel.app/",
    },
    {
      image: image2,
      name: "Ecommerce",
      git_hub: "https://github.com/anonimka05/e-commerce",
      link_project: "https://e-commerce-with-anonimkas.vercel.app/",
    },
    // {
    //   image: image1,
    //   name: "To-Do-List",
    //   git_hub: "https://github.com/anonimka05/To-do-List",
    //   link_project: "https://to-do-list-iota-gray.vercel.app/",
    // },
  ];

  return (
    <section id="projects" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          <span className="text-[#ff00d0]">Projects</span>
        </h3>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            breakpoints={{ 768: { slidesPerView: 3 } }}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-fit w-full p-4 bg-gray-900 hover:bg-gray-800 transition ease-in-out rounded-xl">
                  <img
                    src={item.image}
                    alt="Project image"
                    className="rounded-lg w-80 h-44 object-cover"
                  />
                  <h3 className="text-lg my-4 flex justify-center">
                    {item.name}
                  </h3>
                  <div className="flex gap-3 justify-center">
                    <a
                      href={item.git_hub}
                      target="_blank"
                      className="text-white
                     bg-[#ff00d0] hover:bg-pink-950 px-2 py-1 inline-block  rounded-2xl "
                    >
                      Github
                    </a>
                    <a
                      href={item.link_project}
                      target="_blank"
                      className="text-white rounded-2xl bg-[#ff00d0] hover:bg-pink-950 px-2 py-1 inline-block"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
