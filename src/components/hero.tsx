import Image from "next/image";
import Link from "next/link";
import dark from "../assets/images/darklogo.svg";
import { Button } from "./ui/button";


const Hero = () => {
  return (
    <div className="w-full h-[100%] p-4 rounded-lg bg-foreground overflow-hidden relative
      bg-[url('../assets/images/hero.svg')] bg-center bg-contain bg-no-repeat">
      <div className="flex justify-between p-4">
        <div className="items-center">
          <Link href="/">
            <Image src={dark} alt="Hero" width={100} className="aspect-square" />
          </Link>
        </div>
        <div className="space-x-1">
          <Button className="group ml-auto bg-foreground rounded-full border-2 uppercase w-[200px] h-[40px] items-center p-[4px] justify-between">
            <div className="w-full font-bold text-xl uppercase">Project</div>
            <div className="group-hover:bg-background group-hover:text-foreground bg-primary rounded-full text-sm w-2/3 h-full flex justify-center items-center capitalize">Work</div>
          </Button>
          <Button className="group ml-auto bg-foreground rounded-full border-2 uppercase w-[200px] h-[40px] items-center p-[4px] justify-between">
            <div className="w-full font-bold text-xl uppercase">discover</div>
            <div className="group-hover:bg-background group-hover:text-foreground bg-primary rounded-full text-sm w-2/3 h-full flex justify-center items-center capitalize">journal</div>
          </Button>
        </div>
      </div>
      <div className="w-full text-center">
        <div className="text-[120px] font-heading font-outline-2 text-transparent ">Farhan</div>
        <div className="text-[100px] font-heading text-black">Alfathra</div>
      </div>
    </div>
  )
}

export default Hero;
