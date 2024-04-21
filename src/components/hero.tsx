import Image from "next/image";
import logo from "../assets/images/Vector.svg";
import { Card } from "./ui/card";

export default function Hero() {
  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-2 h-full p-4">
      <Card className="col-span-4 bg-orange-500 flex items-center p-4">
        <Image src={logo} alt="Hero" width={60} className="aspect-square" />
      </Card>
      <Card className="bg-muted row-span-7">
        <h1 className="text-2xl font-bold">Farhan Alfathra</h1>
        <h1 className="text-2xl font-bold">
          ⸺ Software Engineer</h1>
      </Card >
      <Card className="bg-muted col-span-2">
        <h1 className="text-2xl font-bold">Farhan Alfathra</h1>
        <h1 className="text-2xl font-bold">
          ⸺ Software Engineer</h1>
      </Card >
      <Card className="bg-muted row-span-7">
        <h1 className="text-2xl font-bold">Farhan Alfathra</h1>
        <h1 className="text-2xl font-bold">
          ⸺ Software Engineer</h1>
      </Card >
      <Card className="bg-muted col-span-2 row-span-6">
        <h1 className="text-2xl font-bold">Farhan Alfathra</h1>
        <h1 className="text-2xl font-bold">
          ⸺ Software Engineer</h1>
      </Card >
    </div >
  );
}


