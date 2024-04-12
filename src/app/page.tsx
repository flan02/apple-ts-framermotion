import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Usps from "@/components/Usps";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-black">
          <Hero />
          <Usps />
        </div>
        <div>
          <Container>3 col layout</Container>
        </div>
        <div>
          <Container>Carousel with posters</Container>
        </div>
      </main>
    </>
  );
}
