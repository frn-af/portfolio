import Image from "next/image";
import hero from "../assets/images/hero.svg";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const ttNorm = localFont({
  src: "../assets/fonts/TT-Norms-Pro-ExtraBlack.otf",
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="absolute p-10">Farhan Alfathra</div>
      <div className="flex justify-center items-center h-screen">
        <Image
          src={hero}
          alt="site under construction"
          width={300}
          height={300}
        />
        <div
          className={cn(
            ttNorm.className,
            "uppercase absolute text-center text-2xl leading-5 text-[#DF505F]"
          )}
        >
          <div>cooming</div>
          <div>soon</div>
        </div>
      </div>
    </main>
  );
}
