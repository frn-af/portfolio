import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import dark from "../assets/images/lightlogo.svg";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-40">
      <div className="flex w-[85%]">
        <div className="w-3/4">
          <h1 className=" text-4xl font-bold capitalize text-right font-heading ">Get in touch</h1>
          <Separator className="bg-primary mt-10 mb-10" />
          <div className="flex justify-between">
            <p className="w-1/3 font-heading">I am always open to exploring new opportunities, collaborations, and discussions on emerging technologies. Feel free to connect with me on{" "}
              <Link href="https://linkedin.com/in/farhanalfathra" aria-label="linkedin">
                <span className="underline underline-offset-1 decoration-primary hover:no-underline hover:text-primary">LinkedIn</span>
              </Link>
              , explore my projects on{" "}
              <Link href="https://github.com/frn-af" aria-label="github">
                <span className="underline underline-offset-1 decoration-primary hover:no-underline hover:text-primary">GitHub</span>
              </Link>
              , or reach out directly for any inquiries or potential collaborations.</p>
            <div className="flex flex-col justify-end gap-4">
              <Link href="/contact">
                <Button variant="outline" className="w-full bg-transparent border-primary font-heading">Contact Me</Button>
              </Link>
              <p className="font-heading capitalize text-sm"> {year} © farhan alfathra. All rights reserved.</p>
            </div>
          </div>
        </div>
        <div className="w-1/3 text-right flex flex-col justify-between items-end">
          <Link href="/">
            <Image src={dark} width={100} alt="Farhan Alfathra" className="rounded-md" />
          </Link>
          <div>
            <p className="font-heading capitalize underline underline-offset-1 decoration-primary">lets connect :</p>
            <div className="flex justify-end mt-2 gap-2">
              <Link href="https://instagram.com/frn.af" aria-label="instagram">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/frn_af" aria-label="x">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/frn-af" aria-label="github">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/farhanalfathra" aria-label="linkedin">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
