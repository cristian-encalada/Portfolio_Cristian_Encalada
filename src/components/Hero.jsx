import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { styles } from "../styles";
import { FadingImage } from "./canvas/FadingImage";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px] mx-auto ${styles.paddingX} flex flex-col items-start`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#64b5f6]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div> */}

        <div>
        <TypeAnimation
            sequence={[
              'Cristian Encalada',
            ]}
            wrapper="h1"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={0}
          />
          <br />
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Electronics Engineer + Full Stack Developer',
              1000,
              'Electronics Engineer + Backend Developer',
              1000,
              'Electronics Engineer + Frontend Developer',
              1000,
              'Electronics Engineer + 3D Designer',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
      </div>

        <Canvas className="top-10 sm:w-80 md:w-80">
          <FadingImage />
        </Canvas>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mx-auto'>
      <a href='#experience'>
        <div className='w-[35px] h-[64px] rounded-3xl border-secondary flex justify-center items-start p-2'>
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='w-6 h-6 text-secondary'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </motion.div>
        </div>
      </a>
      </div>
    </section>
  );
};



export default Hero;
