"use client";
import Image from "next/image";
import Modal from "@/components/Modal";
import { Clash } from "@/app/layout";
import { motion } from "framer-motion";
const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: -50,
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
const fadeInAnimationdelay = {
  initial: {
    opacity: 0,
    y: -25,
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
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};
const fadeInAnimationdelay2 = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.7,
      ease: "easeInOut",
    },
  },
};
const fadeInAnimationdelay3 = {
  initial: {
    opacity: 0,
    y: -20,
    scale: 0.6,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      delay: 1,
      ease: "easeInOut",
    },
  },
};
const boxShadowAnimation = {
  initial: {
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(94, 106, 210, 0.5)", // Changed color to 5E6AD2
      "0 0 30px rgba(94, 106, 210, 0.7)", // Increased spread
      "0 0 40px rgba(94, 106, 210, 1)", // Increased spread
      "0 0 30px rgba(94, 106, 210, 0.7)", // Increased spread
      "0 0 20px rgba(94, 106, 210, 0.5)", // Increased spread
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
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
export default function HeroSection() {
  return (
    <main className="relative max-w-11xl">
      <div className="flex flex-col gap-4 p-5 mt-2 text-2xl font-semibold sm:flex-row-reverse sm:items-center md:text-3xl lg:text-4xl lg:mt-14 xl:text-5xl 2xl:text-7xl">
        <div className="flex flex-col items-center justify-center sm:ml-4">
          <motion.h1
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
            className={`${Clash.className} text-lg sm:text-3xl mt-4 md:text-4xl lg:text-5xl xl:text-6xl text-themeblue`}
          >
            Streamline Your Salon Operations
          </motion.h1>
          <motion.h1
            variants={fadeInAnimationdelay}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
            className={`${Clash.className} text-lg sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-themeblue`}
          >
            Our Comprehensive ERP Software
          </motion.h1>
          <div className="flex items-center justify-center">
            <motion.p
              variants={fadeInAnimationdelay1}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
              className="max-w-md mt-4 text-xs font-medium text-center sm:text-md md:text-lg text-slate-700"
            >
              Form tracking inventory to monitoring employee performance and
              analyzing sales data, there's always something to keep you on your
              toes.
            </motion.p>
          </div>
          <div className="flex items-center justify-center mt-2 text-lg font-normal ">
            <motion.button
              variants={fadeInAnimationdelay2}
              initial="initial"
              whileInView="animate"
              delay={1}
              viewport={{ once: true }}
              className="flex items-center justify-center p-2 mt-3 text-sm font-light text-white transition-transform duration-300 ease-in-out transform rounded-full bg-violet-500 sm:text-lg hover:bg-violet-600 hover:text-white hover:ring-4 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M6.40961 11.4697C6.11672 11.7626 6.11672 12.2374 6.40961 12.5303C6.7025 12.8232 7.17738 12.8232 7.47027 12.5303L11.4702 8.53033C11.7606 8.23999 11.7635 7.77014 11.4767 7.47624L7.57413 3.47624C7.28486 3.17976 6.81003 3.17391 6.51355 3.46318C6.21707 3.75244 6.21122 4.22728 6.50048 4.52376L9.88577 7.99351L6.40961 11.4697Z"
                  fill="white"
                />
              </svg>
            </motion.button>
          </div>
          <motion.div
            variants={fadeInAnimationdelay3}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}>
          <motion.img
            variants={boxShadowAnimation}
            initial="initial"
            whileInView="animate"
            delay={1}
            viewport={{ once: true }}
            src="/hero.png"
            alt="ERP Screens"
            className="h-auto p-5 w-ful mt-7"
          />
        </motion.div>
          </div>
      </div>
    </main>
  );
}