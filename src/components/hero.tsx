"use client"
import Image from "next/image";
import dark from "../assets/images/darklogo.svg";
import light from "../assets/images/lightlogo.svg";
import { Card } from "./ui/card";
import { useTheme } from "next-themes";

export default function Hero() {

  const { theme } = useTheme();

  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-2 h-full p-4">
      <Card className="col-span-4 bg-foreground flex items-center p-4 border-none">
        {theme === "dark" ? (
          <Image src={light} alt="Hero" width={60} className="aspect-square" />
        ) : (
          <Image src={dark} alt="Hero" width={60} className="aspect-square" />
        )}
      </Card>
      <Card className="row-span-7 p-4 bg-foreground text-muted
        border-none">
        <h1 className="text-2xl font-bold">Farhan Alfathra</h1>
        <h1 className="text-2xl font-bold">
          ⸺ Software Engineer</h1>
      </Card >
      <Card className="bg-muted border-none col-span-2">
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
      <Card className="bg-orange-300 col-span-2 border-none row-span-6">
      </Card >
    </div >
  );
}


