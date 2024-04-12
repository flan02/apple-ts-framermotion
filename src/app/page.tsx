import Button from "@/components/Button";
import Container from "@/components/Container";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Usps from "@/components/Usps";
import VideoCarrousel from "@/components/(videocarrousel)/VideoCarrousel";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-black">
          <Hero />
          <Usps />
        </div>

        <VideoCarrousel />
        <div className="h-[300vh]" />
      </main>
    </>
  );
}
