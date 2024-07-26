import Header from "@/components/header";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper"
import photo1 from "../../assets/images/me-1.svg"
import photo2 from "../../assets/images/me-2.svg"
import photo3 from "../../assets/images/me-3.svg"
import Image from "next/image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Link from "next/link";

export default function About() {
  return (
    <MaxWidthWrapper>
      <div>
        <Header />
      </div>
      <div className="w-full md:w-[85%] flex justify-between">
        <div className="space-y-4">
          <div className="flex space-x-4">
            <Image src={photo1} width={200} alt="Farhan Alfathra" className="rounded-md w-28 md:w-64" />
            <p className="hidden md:blck text-sm font-heading font-bold text-primary">~00</p>
          </div>
          <div className="flex space-x-4">
            <Image src={photo2} width={200} alt="Farhan Alfathra" className="rounded-md w-28 md:w-64" />
            <p className="hidden md:blck text-sm font-heading font-bold text-primary">~01</p>
          </div>
          <div className="flex space-x-4">
            <Image src={photo3} width={200} alt="Farhan Alfathra" className="rounded-md w-28 md:w-64" />
            <p className="hidden md:blck text-sm font-heading font-bold text-primary">~02</p>
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
          <h1 className="md:w-3/4 text-xl md:text-5xl font-heading tracking-tighter ">Hi!, I am <span className="font-bold underline underline-offset-1 decoration-primary italic">Farhan Alfathra</span> a dedicated Software Engineer based in Indonesia.</h1>
          <h1 className="md:w-3/4 text-xl md:text-5xl font-heading tracking-tighter ">My goal is to write <span className="font-bold underline underline-offset-1 decoration-primary italic">maintainable, clean, and understandable code</span> to process was enjoyable.</h1>
          <Separator className="bg-primary" />
          <p className="hidden md:block md:text-3xl font-heading">I am a firm believer in the power of maintainable code and the importance of continuous learning. My approach to software development is holistic, combining technical acumen with a keen eye for detail and a commitment to delivering exceptional results.</p>
          <div className="hidden md:flex mt-10">
            <Link href="/contact">
              <Button variant="outline" className=" capitalize font-heading bg-transparent border-primary"> =={">"} curriculum vitae {"<"}==</Button>
            </Link>
          </div>
        </div>
      </div >
      <p className="block md:hidden text-center font-heading mt-10">I am a firm believer in the power of maintainable code and the importance of continuous learning. My approach to software development is holistic, combining technical acumen with a keen eye for detail and a commitment to delivering exceptional results.</p>
      <div className="flex md:hidden justify-center mt-10">
        <Link href="/contact">
          <Button variant="outline" className=" capitalize font-heading bg-transparent border-primary"> =={">"} curriculum vitae {"<"}==</Button>
        </Link>
      </div>
      <p className="md:text-3xl font-heading text-center mt-10">
        Beyond the lines of code, I am driven by a desire to understand and solve complex problems, innovate, and contribute to projects that make a significant impact. My leadership experience has honed my ability to collaborate effectively, foster team spirit, and drive projects to successful completion.</p>
      <Footer />
    </MaxWidthWrapper >

  );
}
