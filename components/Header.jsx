import Link from "next/link"
import { Button } from "./ui/button"
// Components
import Nav from "./Nav"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
            <h2 className="text-4xl font-semibold">Shaz 
                <span className="text-accent">.</span></h2>
        </Link>
        {/*Desktop Nav & Hire Me Button*/}
        <div className="hidden xl:flex items-center gap-8 ">
            <Nav/>
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
        </div>

        {/*Mobile Nav & Hire Me Button*/}
        <div className="xl:hidden">
            <MobileNav/>
        </div>
      </div>
    </header>
  )
}

export default Header