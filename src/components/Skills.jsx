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
import { SiAntdesign } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const skills = [
  { icon: faHtml5, level: "HTML5" },
  { icon: faCss3Alt, level: "CSS3" },
  { icon: faReact, level: "ReactJs" },
  { icon: faNodeJs, level: "NodeJs" },
  { icon: faJs, level: "JavaScript" },
  { icon: RiTailwindCssFill, level: "TailwindCss" },
  { icon: TbBrandVite, level: "ViteJs" },
  { icon: LuDatabase, level: "Databases" },
  { icon: RiNextjsLine, level: "NextJs" },
  { icon: SiAntdesign, level: "NextJs" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b text-white">
      <div className="max-w-5xl mx-auto text-center  w-full border:none border-pink-500">
        <h3 className="lg:text-4xl text-2xl font-bold text-[#ff00d0] mb-8">
          Skills
        </h3>
        <div className="relative w-full  grid grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-700 hover:bg-[#ff00d0] transition-all rounded-full flex items-center justify-center shadow-lg">
                {typeof skill.icon === "object" ? (
                  <FontAwesomeIcon icon={skill.icon} className="text-4xl" />
                ) : (
                  <skill.icon className="text-4xl" />
                )}
              </div>
              <p className="mt-2 text-gray-300">{skill.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
