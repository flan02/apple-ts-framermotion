/* eslint-disable @next/next/no-img-element */
import { IMovie } from "@/movies"
import { twMerge } from "tailwind-merge"


type Props = {
  movie: IMovie
  className?: string
  classNameImg?: string
}

const MoviePoster = ({ movie, className, classNameImg }: Props) => {
  return (
    <div className={twMerge("shrink-0 aspect-video", className)}>
      <img className={twMerge("h-full w-full object-cover", classNameImg)} src={movie.poster} alt={movie.name} />

    </div>
  )
}

export default MoviePoster