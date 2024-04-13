/* eslint-disable @next/next/no-img-element */
'use client'
import { movies, randomMoviesSet1, randomMoviesSet2 } from "@/movies"
import Container from "../Container"
//import MoviePoster from "../MoviePoster"
import SmallVideoCarrousel from "./SmallVideoCarrousel"
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion"
import React, { useMemo, useState } from "react"
import { useWindowSize } from "react-use"
import Button from "../Button"

type Props = {}

const VideoCarrousel = (props: Props) => {
  const w = useWindowSize();
  const carrouselWrapperRef = React.useRef<HTMLDivElement>(null)
  const scroll = useScroll({
    target: carrouselWrapperRef,
    offset: ["start start", "end start"] // ? ["Element Viewport"] 
  })
  const maximumScale = useMemo(() => {
    const windowYRatio = w.height / w.width
    const xScale = 1.6667; // * We calculate the scale of the x axis according to the aspect ratio of the window
    const yScale = xScale * (16 / 9) * windowYRatio; // * We calculate the scale of the y axis according to the aspect ratio of the window
    return Math.max(xScale, yScale)
  }, [w.width, w.height])

  const scale = useTransform(scroll.scrollYProgress, [0.3, 0.5, 0.66], [3, `${maximumScale}`, 1]) // 0.66 because the height viewport of the carrousel is 300vh
  const postersOpacity = useTransform(scroll.scrollYProgress, [0.64, 0.66], [0, 1])
  const postersTranslateXLeft = useTransform(scroll.scrollYProgress, [0.64, 0.66], [-20, 0])
  const postersTranslateXRight = useTransform(scroll.scrollYProgress, [0.64, 0.66], [20, 0])
  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">("inactive")
  const valueEvent = useMotionValueEvent(scroll.scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {  // ? 0.67 because the height viewport of the carrousel is 0.66vh
      setCarouselVariant("active")
    } else {
      setCarouselVariant("inactive")
    }
  })
  return (
    <motion.div
      animate={carouselVariant}
      className="bg-black pb-16"
    >


      <div
        ref={carrouselWrapperRef}
        className="overflow-clip h-[300vh] mt-[-100vh]">
        <div className="flex items-center h-screen sticky top-0">
          <div className="relative mb-5 flex gap-5 left-1/2 -translate-x-1/2">
            <motion.div
              style={{ opacity: postersOpacity, x: postersTranslateXLeft }}
              className={"shrink-0 aspect-[9/16] md:aspect-video w-[50vw] overflow-clip"}>
              <img className={"h-full w-full object-cover rounded-2xl"} src={movies[0].poster} alt={movies[0].name} />
            </motion.div>
            <motion.div
              style={{ scale }}
              className={"relative shrink-0 aspect-video w-[50vw] overflow-clip"}>
              <img className={"h-full w-full object-cover rounded-2xl"} src={movies[1].poster} alt={movies[0].name} />
              <motion.div
                variants={{
                  active: { opacity: 1 },
                  inactive: { opacity: 0 }
                }}
                className="absolute flex justify-between left-0 bottom-0 w-full items-center">
                <p className="font-semibold text-emerald-100 text-xl ">Napoleon</p>
                <Button size="medium" className="mr-4 mb-4">Watch now</Button>
              </motion.div>
            </motion.div>
            <motion.div
              style={{ opacity: postersOpacity, x: postersTranslateXRight }}
              className={"shrink-0 aspect-[9/16] md:aspect-video w-[50vw] overflow-clip"}>
              <img className={"h-full w-full object-cover rounded-2xl"} src={movies[2].poster} alt={movies[0].name} />
            </motion.div>


          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 }
        }}
        transition={{ duration: 0.4 }}
        className="pt-4 -mt-[calc((100vh-(65vw*(16/9)))/2)] lg:-mt-[calc(100vh-(43vw*(16/9)/2))] space-y-3">
        <SmallVideoCarrousel movies={randomMoviesSet1} />
        {/* Default 80s. If wrapped the component an define a css class duration default speed will change. */}
        <div className="[--duration:45s]"> {/* [--carousel-offset:-32px] -> offset: disalign carousel towards left*/}
          <SmallVideoCarrousel movies={randomMoviesSet2} />
        </div>
      </motion.div>


    </motion.div>
  )
}

export default VideoCarrousel