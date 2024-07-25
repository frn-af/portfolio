import Image from "next/image";
import Link from "next/link";
import frnaf from "../assets/images/frnaf.svg";
import tilde from "../assets/images/tilde.svg";
import frnaf2 from "../assets/images/frnaf2.svg";
import dark from "../assets/images/lightlogo.svg";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

const navItems = [
  {
    title: "projects",
    badge: "01",
    href: "/projects",
  },
  {
    title: "discover",
    badge: "02",
    href: "/discover",
  },
  {
    title: "about",
    badge: "03",
    href: "/about",
  },
  {
    title: "contact",
    badge: "04",
    href: "/contact",
  },
];

const Header = () => {
  const year = new Date().getFullYear();
  return (
    <header className="w-full relative">
      <div className="md:w-[85%] md:flex justify-between">
        <div className="hidden md:w-3/4 md:flex md:justify-between">
          <Link href="/">
            <Image src={dark} alt="untilde" width={100} className="w-28" />
          </Link>
          <div className="flex flex-row">
            {navItems.map((item) => (
              <Link href={item.href} key={item.title}>
                <Button variant="ghost">
                  <h3 className="underline text-xl md:text-sm uppercase font-heading underline-offset-1 decoration-primary"> {item.title}</h3>
                  <Badge variant="ghost" className="-mt-3 -ml-1 text-primary">
                    [~{item.badge}]
                  </Badge>
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden absolute md:block ml-20 text-sm top-0 right-[15%]">
          <Separator className="bg-primary mb-4" />
          <div >
            <Link href="/contact">
              <h3 className="uppercase underline mb-4 font-heading underline-offset-1 decoration-primary">
                ={">"} currently open to work</h3>
            </Link>
          </div>
          <h4 className="capitalize mb-4 font-heading">lets make <br />
            something amazing <br />
            together
          </h4>
          <h4 className="mb-4 text-right font-heading">Contact :<br />
            <span className="underline underline-offset-1 decoration-primary">contact@farhanalfathra.com</span>
          </h4>
          <h4 className="mb-4 text-right font-heading">Instagram :<br />
            <span className="underline underline-offset-1 decoration-primary">@frn.af</span>
          </h4>
          <Separator className="bg-primary" />
          <div className="w-full text-center absolute mt-4">
            <p className="font-heading capitalize text-sm"> {year} © farhan alfathra.<br /> All rights reserved.</p>
          </div>
        </div >
        <div className="absolute hidden md:block right-0">
          <Image src={frnaf} alt="farhanalfathra" width={100} />
        </div>
      </div >
      <div className="w-full md:hidden flex flex-col items-end justify-end">
        <Link href="/">
          <Image src={frnaf2} alt="untilde" width={180} />
        </Link>
        <Link href="/contact">
          <h3 className="uppercase text-xl text-right underline mt-4 font-heading underline-offset-1 decoration-primary">
            currently <br /> open to work</h3>
        </Link>
      </div>
    </header>
  )
}

export default Header;
