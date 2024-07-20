import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Menu = () => {

  const menuItems = [
    {
      title: "Projects",
      href: "/",
    },
    {
      title: "discover",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <div className="w-full h-full mt-10 p-4">
      <h1 className="text-6xl font-heading tracking-tighter">Explore More :</h1>
      <div className="flex flex-col mt-10">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
          >
            <div className="flex">
              <ArrowUpRight className="w-20 h-20" />
              <h2 className="text-6xl font-heading tracking-tighter">{item.title}</h2>
            </div>
          </Link>
        ))
        }
      </div>
    </div>
  );
}
export default Menu;
