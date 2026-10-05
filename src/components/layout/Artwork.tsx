import { motion } from "motion/react";
import type { Variants } from "motion/react";
import StandNexo from "../../assets/images/stand.png";

interface HeroArtworkProps {
  mobile?: boolean;
}

const ringAnimation = (delay: number) => ({
  initial: {
    opacity: 0,
    x: 80,
    scale: 0.96,
    rotate: -3,
  },

  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 1,
      delay,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
});

const standAnimation: Variants = {
  initial: {
    opacity: 0,
    scale: 0.92,
    x: 45,
    y: 16,
    rotate: -2,
  },

  animate: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,

    transition: {
      delay: 1.05,
      duration: 1.05,
      ease: [0.25, 1, 0.5, 1],
    },
  },
};

const glowAnimation = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },

  animate: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 0.8,
      delay: 0.35,
      ease: [0.25, 1, 0.5, 1] as [number, number, number, number],
    },
  },
};

export function HeroArtwork({
  mobile = false,
}: HeroArtworkProps) {
  return (
    <div
      className={`
        relative
        h-full
        w-full
        overflow-hidden

        ${mobile ? "" : "translate-y-8"}
      `}
    >
      {/* Green Ring */}

      <motion.div
        variants={ringAnimation(0)}
        initial="initial"
        animate="animate"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-[#009246]/50
          bg-[#009246]/70

          ${
            mobile
              ? "-right-24 h-[26rem] w-[26rem]"
              : "xl:-right-32 xl:h-[42rem] xl:w-[42rem] lg:-right-40 lg:h-[34rem] lg:w-[34rem]"
          }
        `}
      />

      {/* White Ring */}

      <motion.div
        variants={ringAnimation(0.18)}
        initial="initial"
        animate="animate"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-white
          bg-white/90
          shadow-[0_0_60px_rgba(255,255,255,0.55)]

          ${
            mobile
              ? "-right-16 h-[20rem] w-[20rem]"
              : "lg:-right-30 lg:h-[28rem] lg:w-[28rem] xl:-right-24 xl:h-[34rem] xl:w-[34rem]"
          }
        `}
      />

      {/* Red Ring */}

      <motion.div
        variants={ringAnimation(0.36)}
        initial="initial"
        animate="animate"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          rounded-full
          border-2
          border-[#CE2B37]/50
          bg-[#CE2B37]/70

          ${
            mobile
              ? "-right-8 h-[14rem] w-[14rem]"
              : "lg:-right-20 lg:h-[21rem] lg:w-[21rem] xl:-right-16 xl:h-[26rem] xl:w-[26rem]"
          }
        `}
      />

      {/* Glow */}

      <motion.div
        variants={glowAnimation}
        initial="initial"
        animate="animate"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          rounded-full
          bg-white/40
          blur-3xl

          ${
            mobile
              ? "right-2 h-[22rem] w-[22rem]"
              : "lg:right-2 lg:h-[24rem] lg:w-[24rem] xl:right-8 xl:h-[32rem] xl:w-[32rem]"
          }
        `}
      />

      {/* Stand */}

      <motion.img
        variants={standAnimation}
        initial="initial"
        animate="animate"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
        src={StandNexo}
        alt="Nexofarm Exhibition Stand"
        className={`
          absolute
          z-10
          select-none
          pointer-events-none
          drop-shadow-[0_40px_80px_rgba(0,0,0,0.20)]

          ${
            mobile
              ? `
                left-1/2
                -translate-x-1/2
                bottom-12
                w-[24rem]
              `
              : `
                top-[56%]
                lg:right-[-3rem]
                lg:w-[31rem]
                lg:top-[50%]

                xl:right-0
                xl:w-[40rem]
                xl:top-[50%]
                -translate-y-1/2
              `
          }
        `}
      />
    </div>
  );
}