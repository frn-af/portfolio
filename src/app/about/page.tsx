import Header from "@/components/header";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper"
import photo1 from "../../assets/images/me-1.svg"
import photo2 from "../../assets/images/me-2.svg"
import photo3 from "../../assets/images/me-3.svg"
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

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
                <BreadcrumbLink href="/" className="text-xl font-heading">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator >
                <h3 className="text-lg uppercase font-heading text-primary">
                  ={">"}</h3>
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/about" className="text-xl font-heading">About</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="w-3/4 text-6xl font-heading tracking-tighter ">Hi!, I am <span className="font-bold underline decoration-primary italic">Farhan Alfathra</span> a dedicated Software Engineer based in Indonesia.</h1>
          <h1 className="w-3/4 text-6xl font-heading tracking-tighter ">My goal is to write <span className="font-bold underline decoration-primary italic">maintainable, clean, and understandable code</span> to process was enjoyable.</h1>
          <Separator className="bg-primary" />
          <p className="text-3xl font-heading">With a profound passion for technology and innovation, I hold a degree in Computer Engineering from Universitas Andalas. My journey in the tech world has been both diverse and enriching, encompassing roles as a full-stack developer and leadership experiences as a former chairman of a prominent organization.</p>
          <Card className="bg-transparent border-primary p-4 text-center font-heading">
            <p>My technical repertoire includes an array of modern technologies, with particular expertise
            </p>
            <div className="flex h-40">
              <Card className="w-full">
                <CardHeader>
                  front-end development
                </CardHeader>
                <CardContent>
                  javascript, typescript, react, next.js, tailwindcss
                </CardContent>
              </Card>
              <Card className="w-full">
                back-end development
              </Card>
              <Card className="w-full">
                Database management
              </Card>
            </div>
          </Card>
        </div>
      </div >
    </MaxWidthWrapper >
  );
}
