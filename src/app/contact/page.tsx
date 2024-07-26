import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Contact() {
  return (
    <MaxWidthWrapper className="h-screen flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="md:w-[85%] flex-grow justify-between flex flex-col">
        <div className="md:w-3/4 flex-grow md:flex-grow-0 justify-center flex flex-col">
          <div className="md:flex justify-between items-center">
            <Breadcrumb className="w-1/3">
              <BreadcrumbList >
                <BreadcrumbItem>
                  <BreadcrumbLink href="/" className="font-heading">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator >
                  <h3 className="uppercase font-heading text-primary">
                    ={">"}</h3>
                </BreadcrumbSeparator>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="w-full text-6xl md:text-8xl md:text-center font-heading tracking-tighter ">Contacts</h1>
          </div>
          <Separator className="bg-primary mt-2" />
        </div>
        <div className="flex gap-8 mt-10 md:w-3/4 flex-grow font-heading">
          <div className="w-1/2">
            <h4 className="capitalize text-xl">
              start a<br /> conversation:
            </h4>
            <h3 className="md:mt-10 mt-4 text-xl md:text-4xl underline underline-offset-1 decoration-primary">
              contact<br className="" />
              @fathra.com
            </h3>
          </div>
          <div className="w-1/2">
            <h4 className="capitalize text-xl">
              call me:
            </h4>
            <h3 className="mt-10 md:mt-16 text-3xl md:text-4xl underline underline-offset-1 decoration-primary">
              +62 812< br />
              73-9990-21
            </h3>
          </div>
        </div>
        <div className="flex flex-grow md:flex-grow-0 md:justify-center gap-8 ">
          <div className="w-1/2 font-heading">
            <h4 className="capitalize text-xl">
              my location:
            </h4>
            <h3 className="md:text-xl mt-2">
              Currently based in Padang, West Sumatra, Indonesia
            </h3>
          </div>
          <div className="w-1/2 gap-4">
            <p className="font-heading text-xl capitalize md:text-right ">find me on :</p>
            <div className="md:flex font-heading mt-2 gap-2 md:justify-end">
              <Link href="https://instagram.com/frn.af" aria-label="instagram">
                <Button variant="outline" className="rounded-full capitalize mt-2" >Instagram</Button>
              </Link>
              <Link href="https://x.com/frn_af" aria-label="x">
                <Button variant="outline" className="rounded-full capitalize mt-2" >twitter</Button>
              </Link>
              <Link href="https://github.com/frn-af" aria-label="github">
                <Button variant="outline" className="rounded-full capitalize mt-2" >github</Button>
              </Link>
              <Link href="https://linkedin.com/in/farhanalfathra" aria-label="linkedin">
                <Button variant="outline" className="rounded-full capitalize mt-2" >linkedin</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper >
  )
}
