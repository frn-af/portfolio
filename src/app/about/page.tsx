import Header from "@/components/header";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper"
import photo1 from "../../assets/images/me-1.svg"
import photo2 from "../../assets/images/me-2.svg"
import photo3 from "../../assets/images/me-3.svg"
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Link from "next/link";

export default function About() {
  return (
    <MaxWidthWrapper>
      <div>
        <Header />
      </div>
      <div className="w-[85%] flex justify-between">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Image src={photo1} width={200} alt="Farhan Alfathra" className="rounded-md" />
            <p className="font-heading font-bold text-primary">~00</p>
          </div>
          <div className="flex space-x-4">
            <Image src={photo2} width={200} alt="Farhan Alfathra" className="rounded-md" />
            <p className="font-heading font-bold text-primary">~01</p>
          </div>
          <div className="flex space-x-4">
            <Image src={photo3} width={200} alt="Farhan Alfathra" className="rounded-md" />
            <p className="font-heading font-bold text-primary">~02</p>
          </div>
        </div>
        <div className="w-2/3 space-y-16">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="font-heading">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator >
                <h3 className="text-lg uppercase font-heading text-primary">
                  ={">"}</h3>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/about" className="font-heading">About</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="w-3/4 text-5xl font-heading tracking-tighter ">Hi!, I am <span className="font-bold underline underline-offset-1 decoration-primary italic">Farhan Alfathra</span> a dedicated Software Engineer based in Indonesia.</h1>
          <h1 className="w-3/4 text-5xl font-heading tracking-tighter ">My goal is to write <span className="font-bold underline underline-offset-1 decoration-primary italic">maintainable, clean, and understandable code</span> to process was enjoyable.</h1>
          <Separator className="bg-primary" />
          <div className="flex justify-center">
            <Link href="/contact">
              <Button variant="outline" className=" capitalize font-heading bg-transparent border-primary"> =={">"} curriculum vitae {"<"}==</Button>
            </Link>
          </div>
          <p className="text-xl font-heading text-center">With a profound passion for technology and innovation, I hold a degree in Computer Engineering from Universitas Andalas. My journey in the tech world has been both diverse and enriching, encompassing roles as a full-stack developer and leadership experiences as a former chairman of a prominent organization.</p>
          <Card className="bg-transparent border-primary p-4 text-center font-heading">
            <p>My technical repertoire includes an array of modern technologies, with particular expertise
            </p>
            <div className="flex gap-2 mt-4">
              <Card className="w-full border-primary">
                <CardHeader className="capitalize">
                  front-end development
                  <Separator className="bg-primary" />
                </CardHeader>
                <CardContent>
                  javascript, typescript, react, next.js, tailwindcss
                </CardContent>
              </Card>
              <Card className="w-full border-primary">
                <CardHeader className="capitalize">
                  back-end development
                  <Separator className="bg-primary" />
                </CardHeader>
                <CardContent>
                  rust, c++
                </CardContent>
              </Card>
              <Card className="w-full border-primary">
                <CardHeader className="capitalize">
                  Database management
                  <Separator className="bg-primary" />
                </CardHeader>
                <CardContent>
                  postgresql, mysql, firebase
                </CardContent>
              </Card>
            </div>
          </Card>
          <p className="text-xl font-heading text-center">I am a firm believer in the power of clean, maintainable code and the importance of continuous learning. My approach to software development is holistic, combining technical acumen with a keen eye for detail and a commitment to delivering exceptional results.</p>
          <p className="text-xl font-heading text-center">
            Beyond the lines of code, I am driven by a desire to understand and solve complex problems, innovate, and contribute to projects that make a significant impact. My leadership experience has honed my ability to collaborate effectively, foster team spirit, and drive projects to successful completion.</p>
        </div>
      </div >
      <Footer />
    </MaxWidthWrapper >

  );
}
