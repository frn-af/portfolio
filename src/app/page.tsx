import Header from "@/components/header";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <MaxWidthWrapper className="h-screen">
      <div className="h-full flex flex-col justify-between">
        <Header />
        <div className="flex flex-col h-1/3">
          <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-black font-heading capitalize tracking-tighter">
            farhan
          </h1>
          <div className="flex">
            <h1 className="text-6xl md:text-8xl 2xl:text-9xl font-black font-heading underline underline-offset-1 decoration-primary capitalize tracking-tighter">alfathra
            </h1>
            <div className="w-4 h-4 md:w-8 md:h-8 bg-primary rounded-full ml-1"></div>
          </div>
          <Link href="/about" aria-label="about">
            <Button variant="outline" className="md:hidden font-heading capitalize mt-4 w-32">about me</Button>
          </Link>
        </div>
        <div className="w-full text-sm">
          <div className="md:w-[85%] md:flex justify-between">
            <div className="flex md:w-2/3">
              <p className="w-1/2 capitalize font-heading underline-offset-1 underline decoration-primary">project type ;</p>
              <div className="w-1/2 font-heading capitalize text-right md:text-left">
                <p>back-end development</p>
                <p>front-end development</p>
                <p>UI/UX </p>
              </div>
            </div>
            <div className="flex justify-between gap-10 mt-10 md:mt-0">
              <p className="font-heading">My goal is to write <span className="font-bold underline underline-offset-1 decoration-primary italic">maintainable, clean, and understandable code</span> to process was enjoyable.</p>
              <div className="text-right items-end">
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
        </div>
      </div>
    </MaxWidthWrapper >
  );
}
