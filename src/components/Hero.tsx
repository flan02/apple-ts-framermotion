/* eslint-disable @next/next/no-img-element */
'use client'
import React from "react"
import Button from "./Button"
import Container from "./Container"
import { useScroll, useTransform } from "framer-motion"
import { motion } from "framer-motion"

type Props = {}

const Hero = (props: Props) => {
  const videoContainerRef = React.useRef<HTMLDivElement>(null)
  const scroll = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"]
  })
  const opacity = useTransform(scroll.scrollYProgress, [0, 0.7, 1], [1, 1, 0])
  return (
    <div className="relative bg-black text-white">
      <motion.div
        ref={videoContainerRef}
        style={{ opacity }}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]">
        <img className="sticky top-0 h-screen object-cover w-[1910px]" src="/posters/napoleon.webp" alt="Napoleon" />
      </motion.div>
      <Container className=" max-w-[1280px] relative z-10 h-[--hero-height] items-start justify-center pl-24">
        <motion.div
          className="flex flex-col items-start justify-end h-[730px]"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 0.8 }}
        >
          <h1 className=" text-5xl md:text-7xl font-bold mt-60">All Apple Originals. <br />
            Only on Apple TV+.
          </h1>
          <Button size="large" className="mt-16">Stream now</Button>
          <p className="font-semibold mt-40">Watch on the 📺tv app.</p>

        </motion.div>
      </Container>
    </div>
  )
}

export default Hero