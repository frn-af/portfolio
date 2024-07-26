"use client"
import Image from "next/image";
import Link from "next/link";
import frnaf from "../assets/images/frnaf.svg";
import frnafdark from "../assets/images/frnaf-dark.svg";
import frnaf2 from "../assets/images/frnaf2.svg";
import frnaf2dark from "../assets/images/frnaf2-dark.svg";
import dark from "../assets/images/lightlogo.svg";
import light from "../assets/images/darklogo.svg";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

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

export function Toogle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  })

  if (!mounted) return null;

  return (
    <div>
      <Button variant="link" onClick={() =>
        setTheme(isDark ? "light" : "dark")
      } >
        {isDark ?
          <Moon className="h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          :
          <Sun className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        }
      </Button>
    </div>

  )
}
const Header = () => {
  const year = new Date().getFullYear();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  })

  if (!mounted) return null;
  return (
    <header className="w-full relative h-40 md:h-60">
      <div className="md:w-[85%] md:flex justify-between">
        <div className="hidden md:w-3/4 md:flex md:justify-between">
          <Link href="/">
            {isDark ?
              <Image src={dark} alt="untilde" width={100} className="w-28" />
              :
              <Image src={light} alt="untilde" width={100} className="w-28" />
            }
          </Link>
          <div className="flex flex-row justify-between">
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
            <Toogle />
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

          {isDark ?
            <Image src={frnaf} alt="farhanalfathra" width={100} />
            :
            <Image src={frnafdark} alt="farhanalfathra" width={100} />
          }
        </div>
      </div >
      <div className="w-full md:hidden flex flex-col items-end justify-end">
        <Link href="/">
          {isDark ?
            <Image src={frnaf2} alt="untilde" width={180} />
            :
            <Image src={frnaf2dark} alt="untilde" width={180} />
          }
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
