"use client"
import Image from "next/image";
import dark from "../assets/images/darklogo.svg";
import light from "../assets/images/lightlogo.svg";
import { Card } from "./ui/card";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function Hero() {

  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-2 h-full p-4">
      <Card className="col-span-4 bg-foreground flex items-center justify-between p-4 border-none">
        <div>
          {theme === "dark" ? (
            <Image src={light} alt="Hero" width={60} className="aspect-square" />
          ) : (
            <Image src={dark} alt="Hero" width={60} className="aspect-square" />
          )}
        </div>
        <div className="">
          <Button className="ml-auto bg-foreground rounded-full border-2 uppercase w-64 h-12 items-center p-[2px] justify-between">
            <div className="w-full text-2xl uppercase">work</div>
            <div className="bg-orange-300 rounded-full text-xs w-2/3 h-full flex justify-center items-center capitalize">project</div>
          </Button>
          <Button className="ml-auto bg-foreground rounded-full border-2 uppercase w-64 h-12 items-center p-[2px] justify-between">
            <div className="w-full text-2xl uppercase">discover</div>
            <div className="bg-orange-300 rounded-full text-xs w-2/3 h-full flex justify-center items-center capitalize">journal</div>
          </Button>
        </div>

      </Card>
      <Card className="row-span-7 p-4 bg-foreground text-muted
        border-none">
        <h1 className="text-2xl font-bold">Farhan Alfathra</h1>
        <h1 className="text-2xl font-bold">
          ⸺ Software Engineer</h1>
      </Card >
      <Card className="bg-orange-300 col-span-2 border-none row-span-7">
      </Card >
      <Card className="border-none row-span-7">
        <div className="grid grid-cols-2 grid-rows-5 h-full gap-2">
          <Card className="border-none bg-foreground ">
          </Card >
          <Card className="border-none bg-primary row-span-2">
          </Card >
          <Card className="border-none bg-foreground ">
          </Card >
          <Card className="border-none bg-foreground ">
          </Card >
          <Card className="border-none bg-foreground">
          </Card >
          <Card className="border-none bg-foreground row-span-2 col-span-2">
          </Card >
        </div>
      </Card >
    </div >
  );
}


