import Button from "./Button"
import Container from "./Container"



type Props = {}

const Header = (props: Props) => {
  return (
    <>
      <header className="bg-black text-white">
        <Container className="flex items-center min-h-11">
          <a href="/" className="flex h-11 items-center px-6 -ml-6"> 🍎
            <span className="sr-only text-white">Back to homepage</span>
          </a>
        </Container>
      </header>
      <div className="sticky top-0 bg-black text-white">
        <Container className="flex items-center min-h-11 justify-between">
          <p>Apple TV+ </p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  )
}

export default Header