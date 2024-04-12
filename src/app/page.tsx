import Container from "@/components/Container";
import Header from "@/components/Header";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="h-[300vh]">
          <Container>Hero component</Container>
        </div>
        <div>
          <Container>usps</Container>
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
