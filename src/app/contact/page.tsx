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
      <div className="w-[85%]">
        <div className="w-3/4">
          <div className="flex justify-between items-center">
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
            <h1 className="w-full text-8xl font-black text-center font-heading tracking-tighter ">Contacts</h1>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex-grow mt-4">
        <Separator className="bg-primary w-3/4" />
        <div className="w-3/4 font-heading flex flex-grow pt-10 gap-8 justify-between">
          <div>
            <h4 className="capitalize text-xl">
              start a<br /> conversation:
            </h4>
            <h3 className="mt-10 text-xl underline underline-offset-1 decoration-primary">
              contact@farhanalfathra.me
            </h3>
          </div>
          <div>
            <h4 className="capitalize text-xl">
              my location:
            </h4>
            <h3 className="mt-2 text-sm">
              I&apos;am currently based in Padang, West Sumatra, Indonesia
            </h3>
          </div>
          <div>
            <h4 className="capitalize text-xl">
              call me:
            </h4>
            <h3 className="mt-10 text-4xl underline underline-offset-1 decoration-primary">
              +62 8-12 739-990-21
            </h3>
          </div>
        </div>
      </div>
      <div className="w-[85%]">
        <div className="w-3/4 flex items-center justify-between gap-4">
          <p className="font-heading capitalize underline underline-offset-1 decoration-primary">find me on :</p>
          <div className="flex gap-2 font-heading ">
            <Link href="https://instagram.com/frn.af" aria-label="instagram">
              <Button variant="outline" className="rounded-full capitalize" >Instagram</Button>
            </Link>
            <Link href="https://x.com/frn_af" aria-label="x">
              <Button variant="outline" className="rounded-full capitalize" >twitter</Button>
            </Link>
            <Link href="https://github.com/frn-af" aria-label="github">
              <Button variant="outline" className="rounded-full capitalize" >github</Button>
            </Link>
            <Link href="https://linkedin.com/in/farhanalfathra" aria-label="linkedin">
              <Button variant="outline" className="rounded-full capitalize" >linkedin</Button>
            </Link>
          </div>
          <Link href="https://linkedin.com/in/farhanalfathra" aria-label="linkedin">
            <Button variant="link" className="rounded-full capitalize font-heading text-foreground" >Explore more =={">"}</Button>
          </Link>
        </div>
      </div>
    </MaxWidthWrapper >
  )
}
