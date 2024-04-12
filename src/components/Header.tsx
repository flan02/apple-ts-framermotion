import Button from "./Button"
import Container from "./Container"



type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-black text-white">
        <Container className="flex items-center min-h-[--header-row-height] max-w-[950px]">
          <a href="/" className="flex h-[--header-row-height] items-center px-6 -ml-6 text-xl"> 🍎
            <span className="sr-only text-white">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky z-20 top-0 bg-black text-white">
        <Container className="flex items-center min-h-11 justify-between max-w-[950px]">
          <p className="text-xl font-semibold">Apple TV+ </p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  )
}

export default Header