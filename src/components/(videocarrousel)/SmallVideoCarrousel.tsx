import { IMovie, randomMoviesSet2 } from "@/movies"
import MoviePoster from "../MoviePoster"
import { twMerge } from "tailwind-merge"


type Props = {
  movies: IMovie[]
  className?: string
}

const SmallVideoCarrousel = ({ movies, className }: Props) => {
  // className="relative left-[var(--carousel-offset,0px)]"
  return (
    <div className="overflow-clip">
      <div className={twMerge("flex gap-3 animate-carousel-move", className)}>
        {
          movies.map((movie) => (

            <MoviePoster className="w-[23vw]" classNameImg="rounded-2xl" movie={movie} key={Math.random() * 1001} />
          ))
        }
      </div>
    </div>
  )
}

export default SmallVideoCarrousel