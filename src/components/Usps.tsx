
import Container from "./Container"
import FadeIn from "./FadeIn"


type Props = {}

const Usps = (props: Props) => {
  return (
    <Container className="relative z-10 text-white text-5xl font-semibold space-y-12 max-w-[750px] pb-24">
      <FadeIn>
        <p className="">New Apple Originals every month - always ad-free.</p>
      </FadeIn>
      <FadeIn>
        <p className="">Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.</p>
      </FadeIn>
      <FadeIn>
        <p className="">Watch in 4K HDR video with immersive Spatial Audio. </p>
      </FadeIn>
      <FadeIn>
        <p className="">Share a single suscription with up to five people.</p>
      </FadeIn>

    </Container>

  )
}

export default Usps