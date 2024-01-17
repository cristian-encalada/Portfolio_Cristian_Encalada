import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { featuredprojects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  demo_link,
  source_code_link,
}) => {
  return (
    <motion.div className='p-5 flex flex-col md:flex-row gap-5 items-center' 
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    style={{ boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.6)' }}
    >
      <div className='w-full md:w-1/2'>
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='flex justify-center m-3 card-img_hover gap-10'>
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              <img
                src={demo}
                alt='demo'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='w-20 h-20 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform'
            >
              <img
                src={github}
                alt='source code'
                className='w-3/4 h-3/4 object-contain'
              />
            </div>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>

      <div className='w-full md:w-1/2'>
        <div className='relative w-full h-[330px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>
      </div>

    </motion.div>
  );
};

const FeaturedWorks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Projects I'm proud of</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Featured projects</h2>
      </motion.div>

      <div className='w-full flex'>
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w leading-[30px]'
        >
          Each of the following projects is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p> */}
      </div>

      <div className='mt-20 flex flex-col gap-5'>
        {featuredprojects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(FeaturedWorks, "featuredprojects");
