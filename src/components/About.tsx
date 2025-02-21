import React from "react";

function About() {
  return (
    <section id="about" className=" text-white  py-10 px-3">
      <div className="text-center mt-8 cursor-pointer">
        <h3 className="text-4xl font-semibold mt-center">
          About <span className="text-[#ff00d0]">Me</span>
        </h3>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 justify-center my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto ">
                My name is Munisa Musayeva. I completed the Fullstack course at
                Najot Ta'lim. I'm 19 years old and passionate about programming
                and more. I'm always eager to learn new technologies and improve
                my skills.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
