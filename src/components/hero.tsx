import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Hero = () => {


  return (
    <section className="flex p-4">
      <div className="w-[85%]">
        <h1 className="text-9xl font-black font-heading capitalize tracking-tighter">
          farhan
        </h1>
        <div className="flex">
          <h1 className="text-9xl font-black font-heading capitalize tracking-tighter">alfathra
          </h1>
          <div className="w-4 h-4 bg-primary rounded-full mt-[6rem] ml-1"></div>
        </div>
        <div className="w-full flex justify-between mt-52">
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
              <Link href="https://instagram.com/frn.af">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://x.com/frn_af">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="https://github.com/frn-af">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/farhanalfathra">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
export default Hero;
