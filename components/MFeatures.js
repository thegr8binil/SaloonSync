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
    <div className="flex">
      <motion.main
        className="flex-col items-center gap-4 px-5 mt-24 max-w-10xl xl:gap-48 border border-slate-500 rounded-2xl"
        variants={fadeInAnimationdelay}
        initial="initial"
        whileInView="animate"
        delay={1}
        viewport={{ once: true }}
      >
        <div className="flex flex-col max-w-xl gap-3">
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
            className={`${Clash.className} text-2xl sm:text-4xl mt-4`}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            Save Time and Money <br />
          </motion.h1>
          <motion.p
            className="text-lg text-slate-600"
            variants={fadeInAnimationdelay}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
          >
            Allows users to create and organize tasks in a centralized location.
            Users can categorize tasks based on priority, due dates, projects,
            or specific departments, enabling efficient task management and
            delegation.
          </motion.p>
        </div>
      </motion.main>
     
    </div>
  );
};
export default MFeatures;
