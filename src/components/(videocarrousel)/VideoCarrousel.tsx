/* eslint-disable @next/next/no-img-element */
import { movies, randomMoviesSet1, randomMoviesSet2 } from "@/movies"
import Container from "../Container"
import MoviePoster from "../MoviePoster"
import SmallVideoCarrousel from "./SmallVideoCarrousel"


type Props = {}

const VideoCarrousel = (props: Props) => {

  return (
    <div>

      <Container className="bg-black pb-8">
        <div className="overflow-clip">


          <div className="mb-5 flex gap-5 left-1/2 -translate-x-1/2">
            {
              movies.map((movie) => (
                movies.indexOf(movie) < 3
                  ? <MoviePoster classNameImg={"rounded-2xl"} className="aspect-video w-[50vw] overflow-clip" movie={movie} key={Math.random() * 1001} />
                  : null
              ))
            }
          </div>
        </div>
        <SmallVideoCarrousel movies={randomMoviesSet1} className="mb-3" />
        {/* Default 80s. If wrapped the component an define a css class duration default speed will change. */}
        <div className="[--duration:68s]"> {/* [--carousel-offset:-32px] -> offset: disalign carousel towards left*/}
          <SmallVideoCarrousel movies={randomMoviesSet2} />
        </div>

      </Container>
    </div>
  )
}

export default VideoCarrousel