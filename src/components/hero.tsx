import Image from "next/image";
import { Separator } from "./ui/separator";
import arrowA from "../assets/images/arrow-A.svg";

const Hero = () => {
  return (
    <div className="w-4/6">
      <h1 className="text-9xl font-black font-heading capitalize tracking-tighter underline decoration-primary underline-offset-1">
        farhan
      </h1>
      <div className="flex">
        <h1 className="text-9xl font-black font-heading capitalize tracking-tighter underline-offset-1 underline decoration-primary ">alfathra
        </h1>
        <div className="w-4 h-4 bg-primary rounded-full mt-[6.5rem] ml-1"></div>
      </div>
    </div>
  );
}
export default Hero;
