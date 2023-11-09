"use client";
import { motion } from "framer-motion";
const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};
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
const fadeInAnimationdelay1 = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const ScaleinAnimation = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
export default function Features() {
  return (
    <main className="max-w-10xl p-5 flex flex-col lg:flex-row gap-2">
      <motion.div
        className="flex gap-3 border-2 border-slate-300 p-5 rounded-3xl"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        delay={1}
        viewport={{ once: true }}
      >
        <div>
          <img src="1.png" alt="hero" className="w-28 sm:w-16 mt-1" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Create and Manage Activities
          </h1>
          <p className="font-normal text-slate-700">
            Easily schedule appointments, track the duration of each service,
            and add expenses.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex gap-3 border-2 border-slate-300 p-5 rounded-3xl"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        delay={1}
        viewport={{ once: true }}
      >
        <div>
          <img src="2.png" alt="hero" className="w-40 sm:w-16 mt-1" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Manage Multiple Activities</h1>
          <p className="font-normal text-slate-700">
            Handle multiple appointments simultaneously and maintain a clear
            overview of your salon's operations.
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex gap-3 border-2 border-slate-300 p-5 rounded-3xl"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        delay={1}
        viewport={{ once: true }}
      >
        <div>
          <img src="3.png" alt="hero" className="w-40 sm:w-16 mt-1" />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Sales Reporting</h1>
          <p className="font-normal text-slate-700">
          Gain insights into your salon's sales performance, identify top-selling services, and track revenue trends.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
