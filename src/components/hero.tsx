"use client"
import Image from "next/image";
import dark from "../assets/images/darklogo.svg";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";
export default function Hero() {

  return (
    <div className="grid grid-cols-4 grid-rows-8 gap-2 h-full p-4">
      <Card className="col-span-4 dark:bg-foreground bg-primary  flex justify-between p-4 border-none">
        <div className="items-center flex">
          <Link href="/">
            <Image src={dark} alt="Hero" width={60} className="aspect-square" />
          </Link>
        </div>
        <div className="space-x-1">
          <Button className="group ml-auto bg-foreground rounded-full border-2 uppercase w-60 h-10 items-center p-[2px] justify-between">
            <div className="w-full text-xl uppercase">work</div>
            <div className="group-hover:bg-background group-hover:text-foreground bg-orange-300 rounded-full text-sm w-2/3 h-full flex justify-center items-center capitalize">project</div>
          </Button>
          <Button className="group ml-auto bg-foreground rounded-full border-2 uppercase w-60 h-10 items-center p-[2px] justify-between">
            <div className="w-full text-xl uppercase">discover</div>
            <div className="group-hover:bg-background group-hover:text-foreground bg-orange-300 rounded-full text-sm w-2/3 h-full flex justify-center items-center capitalize">journal</div>
          </Button>
        </div>
      </Card>
      <Card className="row-span-7 p-4 bg-foreground text-muted border-none flex flex-col justify-between ">
        <div>
          <h1 className="text-2xl font-bold">Farhan Alfathra</h1>
          <h1 className="text-2xl font-bold">
            ⸺ Software Engineer</h1>
          <p className="text-lg mt-20">
            Hey, I'm Farhan Alfathra ⸺ a software engineer based in West Sumatera, Indonesia. I specialize in building and designing web applications with a focus on user experience and performance.
          </p>
        </div>
        <div className="space-y-1">
          <p>Lets Connect.</p>
          <div className="flex space-x-2">
            <Instagram />
            <Github />
            <Linkedin />
            <Twitter />
          </div>
        </div>
      </Card >
      <Card className="bg-orange-300 col-span-2 border-none row-span-7 text-black">
        <div className="flex justify-between p-4 pb-2 ">
          <h4 className="text-2xl font-bold capitalize">Experience</h4>
          <div className="w-1/3 ">
            <h4 className="text-xl font-medium capitalize">Freelancer</h4>
            <p className="text-md text-muted mt-8">Fullstack Engineer</p>
            <p className="text-lg text-muted">2022 - Present</p>
            <p className="text-lg text-black mt-10">
              As a Freelance Software Engineer, I am committed to delivering cutting-edge solutions that empower businesses and individuals to thrive
              in the digital landscape.
            </p>
            <p className="text-lg font-medium mt-20">Yep! I'm Currently open to hire...</p>
          </div>
          <div className="w-1/3">
            <h4 className="text-xl font-medium capitalize">PT. Semen Padang</h4>
            <p className="text-md text-muted mt-8">Fullstack Developer - Internship</p>
            <p className="text-lg text-muted">Feb 2022 - Mar 2022</p>
            <ul className="text-lg text-black mt-10 list-disc">
              <li>
                Collaborated with developers and product management team to assess project outcomes and prioritize future app features.
              </li>
              <li>
                Contribute to ERP software development project.
              </li>
            </ul>
          </div>
        </div>
        <Separator className="mt-1" />
        <div className="flex justify-between p-4">
          <h4 className="text-2xl font-bold capitalize">Skils</h4>
          <div className="w-3/5 h-full">
            <h4 className="text-xl font-medium capitalize">Hard -</h4>
            <div className="flex flex-col justify-between">
              <div className="capitalize">
                <p>Computer Science</p>
                <p>Software development life cycle (SDLC)</p>
                <p>Typescript</p>
                <p>Rust</p>
                <p>C++</p>
              </div>
              <Link href="/resume" className="mt-32 text-muted">
                <p className="underline">Find more about me!!!</p>
              </Link>
            </div>
          </div>
        </div>
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


