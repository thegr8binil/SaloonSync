"use client";
import { Clash } from "@/app/layout";
import { motion } from "framer-motion";
const fadeInAnimationdelay = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};
const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const M2Features = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4  w-full items-center justify-center max-w-10xl flex-grow mt-8 px-4">
     <motion.main
        className="flex-col items-center flex-grow justify-center gap-4 px-5   xl:gap-48 border-2 border-slate-400 rounded-2xl"
        variants={fadeInAnimationdelay}
        initial="initial"
        whileInView="animate"
        delay={1}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <motion.div
              variants={fadeInAnimationdelay}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              <img src="c1.png" alt="automation" className="" />
            </motion.div>
            <motion.h1
              className={`${Clash.className} text-2xl sm:text-4xl mt-9 text-center`}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              Get  Detailed  Decisions <br />
            </motion.h1>
            <motion.p
              className="text-lg text-slate-600 text-center pb-4"
              variants={fadeInAnimationdelay}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              Helps businesses keep track of all their financials by providing
              comprehensive tools and functionalities for efficient financial
              management.
            </motion.p>
          </div>
        </div>
      </motion.main>
      <motion.main
        className="flex-col md:pt-20 items-center justify-center gap-4 px-5 flex-grow h-full  xl:gap-48 border-2 border-slate-400 rounded-2xl"
        variants={fadeInAnimationdelay}
        initial="initial"
        whileInView="animate"
        delay={1}
        viewport={{ once: true }}
      >
        <div>
          <div className="flex flex-col gap-3 justify-center items-center">
            <motion.div
              variants={fadeInAnimationdelay}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              <img src="c2.png" alt="automation" className="" />
            </motion.div>
            <motion.h1
              className={`${Clash.className} text-2xl sm:text-4xl mt-9 text-center`}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              Scale your Busines <br />
            </motion.h1>
            <motion.p
              className="text-lg text-slate-600 text-center pb-4"
              variants={fadeInAnimationdelay}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
             Able to add multiple saloons in one account and able to track all the details under one hood. Able to generate saloon wise report.
            </motion.p>
          </div>
        </div>
      </motion.main>
      
    </div>
  );
};
export default M2Features;
