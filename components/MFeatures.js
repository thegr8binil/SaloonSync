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

const MFeatures = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4  w-full items-center justify-center max-w-10xl flex-grow">
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
              <img src="q1.png" alt="automation" className="" />
            </motion.div>
            <motion.h1
              className={`${Clash.className} text-2xl sm:text-4xl mt-9 text-center`}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              Save time and money <br />
            </motion.h1>
            <motion.p
              className="text-lg text-slate-600 text-center pb-4"
              variants={fadeInAnimationdelay}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              It is capable to manage multiple activity and track the total time taken for each service. Able to Pause between sections. Add other activity in middle and much more
            </motion.p>
          </div>
        </div>
      </motion.main>
      <motion.main
        className="flex-col md:pt-14 items-center justify-center gap-4 px-5 flex-grow h-full  xl:gap-48 border-2 border-slate-400 rounded-2xl"
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
              <img src="q2.png" alt="automation" className="" />
            </motion.div>
            <motion.h1
              className={`${Clash.className} text-2xl sm:text-4xl mt-9 text-center`}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
            >
              Make Informed Decisions <br />
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
      
    </div>
  );
};
export default MFeatures;
