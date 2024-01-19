import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { styles } from "../styles";
import { FadingImage } from "./canvas/FadingImage";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#64b5f6]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#fff]'>Cristian Encalada</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full Stack Developer | Electronics Engineer
          </p>
        </div>
      </div>



      <Canvas>
        {/* <FadingImage /> */}
      </Canvas>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
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
