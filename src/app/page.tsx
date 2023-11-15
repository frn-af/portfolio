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
    <main className="max-h-screen">
      <div className="absolute p-10 text-2xl ">Farhan Alfathra</div>
      <div className="absolute flex top-1/2 left-[10%]">
        <div className="w-12 h-6 bg-[#424242] blur-[2px]"></div>
        <div className="w-12 h-6 bg-[#DF505f] blur-[2px]"></div>
        <div className="w-6 h-6 bg-[#1F3982] blur-[2px]"></div>
      </div>
      <div className="absolute w-60 scale-75  -rotate-90  bottom-0 right-[20%]">
        <Info color="#424242" variant={"dark"} />
      </div>
      <div className="absolute w-60 scale-90 -rotate-90  bottom-[60%] right-[20%]">
        <Info color="#424242" variant={"dark"} />
      </div>
      <div className="absolute w-60 scale-[.6]  -rotate-90 bottom-[55%] right-36">
        <Info color="#DF505F" variant={"primary"} />
      </div>
      <div className="absolute w-60 scale-[.6]  -rotate-90  bottom-[25%] right-36">
        <Info color="#424242" variant={"dark"} />
      </div>
      <div className="absolute w-60 scale-[.6]  -rotate-90  bottom-[85%] right-36">
        <Info color="#1F3982" variant={"secondary"} />
      </div>
      <div className="absolute w-60 scale-75  -rotate-90  bottom-[90%] right-0">
        <Info color="#DF505F" variant={"primary"} />
      </div>
      <div className="flex justify-center items-center h-screen">
        <Image
          src={hero}
          alt="site under construction"
          width={350}
          height={350}
        />
        <div
          className={cn(
            ttNorm.className,
            "uppercase absolute text-center text-4xl leading-9 text-[#DF505F] blur-[1px]"
          )}
        >
          <div>cooming</div>
          <div>soon</div>
        </div>
        <div className="absolute z-[999] w-full h-full mix-blend-multiply bg-[url('../assets/images/overlay.jpg')] bg-contain"></div>
      </div>
    </main>
  );
}
