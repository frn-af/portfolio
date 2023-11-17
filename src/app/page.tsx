import Image from "next/image";
import hero from "../assets/images/hero.svg";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Info } from "@/components/info";

const ttNorm = localFont({
  src: "../assets/fonts/TT-Norms-Pro-ExtraBlack.otf",
});

export default function Home() {
  return (
    <main className="h-screen">
      <div className="absolute z-30 w-full h-screen bg-[url('../assets/images/overlay.svg')] mix-blend-difference"></div>
      <div className="hidden md:block">
        <div className="absolute w-60 scale-90 -rotate-90  bottom-0 right-[20%] z-30">
          <Info color="#424242" variant={"dark"} />
        </div>
        <div className="absolute w-60 scale-90 -rotate-90  bottom-[55%] right-[20%] z-30">
          <Info color="#424242" variant={"dark"} />
        </div>
        <div className="absolute w-60 scale-75  -rotate-90 bottom-[55%] right-36 z-30">
          <Info color="#DF505F" variant={"primary"} />
        </div>
        <div className="absolute w-60 scale-75  -rotate-90  bottom-[25%] right-36 z-30">
          <Info color="#424242" variant={"dark"} />
        </div>
        <div className="absolute w-60 scale-75  -rotate-90  bottom-[85%] right-36 z-30">
          <Info color="#1F3982" variant={"secondary"} />
        </div>
        <div className="absolute w-60 scale-75  -rotate-90  bottom-[90%] right-0 z-30">
          <Info color="#DF505F" variant={"primary"} />
        </div>
      </div>
      <Image
        src={hero}
        alt="site under construction"
        width={925}
        height={925}
        className="absolute transform scale-[1.7] md:scale-100 z-10 mix-blend-exclusion -translate-x-[35%] translate-y-[35%] md:translate-x-0 md:translate-y-0 "
      />
      <div className="absolute z-10 w-full text-2xl text-[#EEEEEE] pt-5 md:text-left md:px-5 md:py-2 text-center">
        Farhan Alfathra
      </div>
      <div className="w-full md:w-[900px] md:justify-end ">
        <div
          className={cn(
            ttNorm.className,
            "uppercase text-center text-7xl pt-20 md:text-right md:text-9xl text-[#424242] md:pt-10"
          )}
        >
          <div>cooming</div>
          <div>soon</div>
        </div>
      </div>
      <div className="absolute w-full px-10 py-5 md:w-[900px] flex justify-end z-30">
        <div className="w-12 h-6 bg-[#424242]"></div>
        <div className="w-12 h-6 bg-[#DF505f]"></div>
        <div className="w-6 h-6 bg-[#1F3982]"></div>
      </div>
      <div className="md:hidden">
        <div className="absolute transform scale-75 bottom-[15%] -right-24 z-10 -rotate-90">
          <Info color="#EEEEEE" variant={"light"} />
        </div>
      </div>
    </main>
  );
}
