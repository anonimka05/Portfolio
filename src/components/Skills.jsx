// function Skils() {
//   return (
//     <section id="skills" className="text-white">
//       <div>
//         <h3>
//           <span>Skills</span>
//         </h3>
//       </div>
//     </section>
//   );
// }

// export default Skils;

// import React from "react";
// import { motion } from "framer-motion";
// import { RiNextjsLine } from "react-icons/ri";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHtml5,
//   faCss3,
//   faReact,
//   faNodeJs,
// } from "@fortawesome/free-brands-svg-icons";
// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
// // import { RiNextjsLine } from "react-icons/ri";

// const Skils = () => {
//   // const skills = [
//   //   { logo: "fa-brands fa-html5", level: "HTML5" },
//   //   { logo: "fa-brands fa-css3", level: "CSS3" },
//   //   { logo: "fa-brands fa-react", level: "ReactJs" },
//   //   { logo: "fa-brands fa-node", level: "NodeJs" },
//   //   { logo: "fa-solid fa-database", level: "Databases" },
//   //   { logo: <RiNextjsLine />, level: "NextJs" },
//   // ];
//   const skills = [
//     { icon: <FontAwesomeIcon icon={faHtml5} />, level: "HTML5" },
//     { icon: <FontAwesomeIcon icon={faCss3} />, level: "CSS3" },
//     { icon: <FontAwesomeIcon icon={faReact} />, level: "ReactJs" },
//     { icon: <FontAwesomeIcon icon={faNodeJs} />, level: "NodeJs" },
//     { icon: <FontAwesomeIcon icon={faDatabase} />, level: "Databases" },
//     { icon: <RiNextjsLine />, level: "NextJs" },
//   ];

//   return (
//     <section className="py-16 from-gray-900 to-gray-800 text-white">
//       <div className="max-w-5xl mx-auto text-center">
//         <h3 className="text-4xl font-bold text-[#ff00d0] mb-8">Skills</h3>
//         <div className="text-xl relative overflow-hidden w-full">
//           <motion.div
//             className="flex space-x-10"
//             animate={{ x: [-100, 100, -100] }}
//             transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
//           >
//             {skills.map((skill, i) => (
//               <div key={i} className="flex flex-col items-center">
//                 <div className="w-24 h-24 bg-gray-700 hover:bg-[#ff00d0] transition-all rounded-full flex items-center justify-center shadow-lg">
//                   <i className={`${skill.logo} text-4xl`}></i>
//                 </div>
//                 <p className="mt-2 text-gray-300">{skill.level}</p>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skils;"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faReact,
  faNodeJs,
  faJs,
} from "@fortawesome/free-brands-svg-icons";
import { RiNextjsLine } from "react-icons/ri";
import { LuDatabase } from "react-icons/lu";
import { TbBrandVite } from "react-icons/tb";

const skills = [
  { icon: faHtml5, level: "HTML5" },
  { icon: faCss3Alt, level: "CSS3" },
  { icon: faReact, level: "ReactJs" },
  { icon: faNodeJs, level: "NodeJs" },
  { icon: faJs, level: "JavaScript" },
  { icon: TbBrandVite, level: "ViteJs" },
  { icon: LuDatabase, level: "Databases" },
  { icon: RiNextjsLine, level: "NextJs" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b text-white">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-4xl font-bold text-[#ff00d0] mb-8">Skills</h3>
        <div className="text-xl relative overflow-hidden w-full">
          <motion.div
            className="flex space-x-10"
            animate={{ x: [-100, 100, -100] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {skills.map((skill, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-24 h-24 bg-gray-700 hover:bg-[#ff00d0] transition-all rounded-full flex items-center justify-center shadow-lg">
                  {typeof skill.icon === "object" ? (
                    <FontAwesomeIcon icon={skill.icon} className="text-4xl" />
                  ) : (
                    <skill.icon className="text-4xl" />
                  )}
                </div>
                <p className="mt-2 text-gray-300">{skill.level}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
