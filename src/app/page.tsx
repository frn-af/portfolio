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
    <main className="min-h-screen overflow-visible">
      <div className="absolute p-10 text-2xl">Farhan Alfathra</div>
      <div className="absolute w-1/2 -rotate-90 right-24 bottom-1/2">
        <div className="flex justify-between">
          <Info color="#424242" variant={"dark"} />
          <Info color="#424242" variant={"dark"} />
        </div>
      </div>
      <div className="absolute -rotate-90 bottom-1/2 -right-40 ">
        <div className="flex justify-between">
          <Info color="#424242" variant={"dark"} />
          <Info color="#DF505F" variant={"primary"} />
          <Info color="#1F3982" variant={"secondary"} />
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <Image
          src={hero}
          alt="site under construction"
          width={450}
          height={450}
        />
        <div
          className={cn(
            ttNorm.className,
            "uppercase absolute text-center text-4xl leading-9 text-[#DF505F]"
          )}
        >
          <div>cooming</div>
          <div>soon</div>
        </div>
      </div>
    </main>
  );
}
