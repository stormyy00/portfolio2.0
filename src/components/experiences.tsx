"use client";

import { experienceProps } from "@/types";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type props = {
  data: experienceProps[];
};

const Experiences = ({ data }: props) => {
  const [selected, setSelected] = useState(data[0].company);

  const { title, date, description, company } = data.find(
    ({ company }) => company === selected,
  ) as experienceProps;

  return (
    <div className="flex h-full w-11/12 flex-wrap justify-center items-center md:w-10/12 py-10">
      <div className="flex w-screen flex-col md:flex-row">
        <motion.div
          className="flex flex-col w-full md:w-1/3 pr-4 border-r border-gray-600 flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {data.map(({ company }) => (
            <motion.button
              key={company}
              onClick={() => setSelected(company)}
              className={`relative text-left py-2 px-4 text-white w-full overflow-hidden group transition-all duration-200 ${
                selected === company
                  ? "text-cyan-300 bg-[#1b2638]/60"
                  : "hover:bg-[#1b2638]/30"
              }`}
              whileHover={{
                backgroundColor:
                  selected === company ? "" : "rgba(27, 38, 56, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="absolute left-0 top-0 h-full w-1 bg-cyan-300"
                initial={{
                  opacity: selected === company ? 1 : 0,
                  scaleY: selected === company ? 1 : 0,
                }}
                animate={{
                  opacity: selected === company ? 1 : 0,
                  scaleY: selected === company ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              {company}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            className="w-full md:w-2/3 pl-6 min-h-[100px] flex flex-col justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <motion.div
              className="text-xl md:text-2xl font-semibold mb-1 text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
            >
              {title} <span className="text-cyan-300">@ {company}</span>
            </motion.div>

            <motion.p
              className="text-sm text-gray-400 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              {date}
            </motion.p>

            <motion.div
              className="flex flex-col space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              {description.map((desc, i) => (
                <motion.li
                  key={i}
                  className="text-[#e2e8f0] text-sm md:text-base leading-relaxed"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
                >
                  {desc}
                </motion.li>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Experiences;
