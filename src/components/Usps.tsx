import Container from "./Container"


type Props = {}

const Usps = (props: Props) => {
  return (
    <div>
      <Container className="text-white text-4xl font-bold space-y-12">
        <p>New Apple Originals every month - always ad-free.</p>
        <p>Stream on the Apple TV app on Apple devices, smart TVs, consoles, or sticks.</p>
        <p>Watch in 4K HDR video with immersive Spatial Audio. </p>
        <p>Share a single suscription with up to five people.</p>
      </Container>
    </div>
  )
}

export default Usps