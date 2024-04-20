import Image from "next/image";
import logo from "../assets/images/Vector.svg";
import { Card } from "./ui/card";

export default function Hero() {
  return (
    <div className="flex gap-4 h-full">
      <div className="p-10">
        <Image src={logo} alt="Hero" width={70} className="aspect-square" />
      </div>
      <Card className="w-full rounded-3xl flex justify-between bg-muted">
        <Card className="w-1/2 p-10">
          <h1 className="text-7xl font-bold">Farhan Alfathra</h1>
          <h1 className="text-7xl font-bold">
            ⸺ Software Engineer</h1>
        </Card>
      </Card >
    </div >
  );
}


