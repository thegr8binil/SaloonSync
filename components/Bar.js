"use client";
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
export const Bar = () => {
  return (
    <motion.mian
      className="mt-8"
      variants={fadeInAnimationdelay}
      initial="initial"
      whileInView="animate"
      delay={1}
      viewport={{ once: true }}
    >
      <div className="bg-blue-500 shadow-2xl shadow-blue-500 flex flex-col gap-2 items-center justify-between max-w-10xl px-5 rounded-2xl py-4 mx-6 md:flex-row">
        <div className="flex gap-3 p-5 rounded-3xl mt-3">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-white text-center">
              Employee Management
            </h1>
            <p className="font-normal text-white text-center text-sm mt-3">
              Add, manage, and track employee performance, including attendance,
              hours worked, and Income earned.
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-5 rounded-3xl mt-3">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold text-white text-center">
              Inventory Management
            </h1>
            <p className="font-normal text-white text-center text-sm mt-3">
              Keep track of your salon's inventory levels, reorder supplies when
              needed, and avoid stockouts.
            </p>
          </div>
        </div>
        <div className="flex gap-3 p-5 rounded-3xl mt-3">
          <div className="flex flex-col items-center justify-center ">
            <h1 className="text-3xl font-semibold text-white text-center">
              Multiple Salon Management
            </h1>
            <p className="font-normal text-white text-center text-sm mt-3">
              Manage multiple salons from a single platform, track performance
              across locations, and make informed decisions for your business
              empire.
            </p>
          </div>
        </div>
      </div>
    </motion.mian>
  );
};
