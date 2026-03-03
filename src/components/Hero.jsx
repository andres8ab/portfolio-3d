import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import resume from '../assets/pdf/resume.pdf';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-x-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#00cea8]" />
          <div className="w-1 sm:h-80 h-40 green-pink-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I&apos;m Andres</h1>
          <p className={`${styles.heroSubText} mt-2 text-[#00cea8]`}>
            I develop full stack web applications using{' '}
            <br className="sm:block hidden" />
            react frameworks
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-80 bottom-96 w-full flex justify-end p-2 items-center ">
        <a
          href={resume}
          download
          className="mr-20 rounded-lg p-2 border-2 border-solid border-teal-600 shadow-teal-600 shadow-md hover:border-red-700 hover:shadow-red-700 hover:animate-pulse"
        >
          Download CV
        </a>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
