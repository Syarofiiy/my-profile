"use client";
import React from "react";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from "framer-motion";
import profilePic from "../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="py-24 relative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#2B1942)]"></div>
      <div className="relative">
        <div className="text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Syarofi</h1>
        </div>

        <motion.div className="absolute left-[280px] top-[170px]" drag>
          <Image
            src={cursor}
            height="170"
            width="170"
            alt="cursor"
            className=""
            draggable="false"
          ></Image>
        </motion.div>

        <motion.div className="absolute right-[220px] top-[20px]" drag>
          <Image
            src={lightning}
            height="120"
            width="120"
            alt="cursor"
            className=""
            draggable="false"
          ></Image>
        </motion.div>

        <p className="text-center text-xl max-w-[500px] mx-auto mt-8 text-white/80">
          I am a front-end web developer that provide the best experience for
          users.
        </p>

        <Image
          src={profilePic}
          alt="profile picture"
          className="h-auto w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
