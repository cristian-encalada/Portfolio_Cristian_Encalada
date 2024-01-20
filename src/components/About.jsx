import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { cv } from "../assets";
import { cvpdf } from "../assets";


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full blue-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-24 h-24 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Who am I</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>About me</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary max-w text-[17px] leading-[30px]'
      >
  <div className='flex flex-col md:flex-row justify-between m-3 card-img_hover gap-10'>
  <div>
    <ul style={{ listStyleType: "circle" }}>
      <li>Moved from 🇧🇴 Bolivia to 🇺🇾 Uruguay in 2023.</li>
      <li>1+ year of experience building software projects. Comfortable with backend, frontend and devops.</li>
      <li>2+ years of experience as a QA Software Engineer using Scrum as an agile methodology.</li>
      <li>Proficient in English(B2), technical writing and documentation.</li>
    </ul>
  </div>
  <div
    onClick={() => window.open(cvpdf, "_blank")}
    className='m-3 w-24 h-24 flex justify-center items-center cursor-pointer mx-auto hover:scale-110 transition-transform'
  >
    <img
      src={cv}
      alt='cv'
      className='w-full h-full object-contain'
    />
  </div>
</div>
      </motion.div>
{/* 
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "");
