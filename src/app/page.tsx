import Header from "@/components/header";
import Link from "next/link";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";

export default function Home() {

  return (
    <MaxWidthWrapper className="h-screen">
      <div className="h-full flex flex-col justify-between">
        <Header />
        <div>
          <h1 className="text-8xl 2xl:text-9xl font-black font-heading capitalize tracking-tighter">
            farhan
          </h1>
          <div className="flex">
            <h1 className="text-8xl 2xl:text-9xl font-black font-heading capitalize tracking-tighter">alfathra
            </h1>
            <div className="w-8 h-8 bg-primary rounded-full ml-1"></div>
          </div>
        </div>
        <div className="w-full h-60 flex text-sm items-end">
          <div className="w-[85%] flex justify-between">
            <p className="w-1/3 capitalize font-heading underline-offset-1 underline decoration-primary">project type ;</p>
            <div className="w-1/3 font-heading capitalize">
              <p>back-end development</p>
              <p>front-end development</p>
              <p>UI/UX </p>
            </div>
            <p className="w-1/3 font-heading">My goal is to write <span className="font-bold underline underline-offset-1 decoration-primary italic">maintainable, clean, and understandable code</span> to process was enjoyable.</p>
            <div className="w-1/4 text-right">
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
    </MaxWidthWrapper >
  );
}
