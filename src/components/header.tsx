import Image from "next/image";
import Link from "next/link";
import frnaf from "../assets/images/frnaf.svg";
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
    title: "contacts",
    badge: "04",
    href: "/contacts",
  },
];

const Header = () => {
  const year = new Date().getFullYear();
  return (
    <header className="w-full relative">
      <div className="w-[85%] flex justify-between">
        <div className="w-full flex justify-between">
          <Link href="/">
            <Image src={dark} alt="untilde" width={90} height={90} />
          </Link>
          <div>
            {navItems.map((item) => (
              <Link href={item.href} key={item.title}>
                <Button variant="ghost">
                  <h3 className="underline uppercase text-xl font-heading underline-offset-1 decoration-primary"> {item.title}</h3>
                  <Badge variant="ghost" className="-mt-3 -ml-1 text-primary">
                    [~{item.badge}]
                  </Badge>
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <div className="text-lg ml-20 relative">
          <Separator className="bg-primary mb-4" />
          <div className="flex">
            <Link href="/contact">
              <h3 className="text-lg uppercase underline mb-4 font-heading underline-offset-1 decoration-primary">
                ={">"} open to work</h3>
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
        <div className="absolute right-0">
          <Image src={frnaf} alt="farhanalfathra" width={120} />
        </div>
      </div >
    </header>
  )
}

export default Header;
