import Footer from "@/components/footer";
import Header from "@/components/header";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { Separator } from "@/components/ui/separator";

export default function Contact() {
  return (
    <MaxWidthWrapper>
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
            <h1 className="w-full text-5xl text-center font-heading tracking-tighter ">Contacts</h1>
          </div>
          <Separator className="bg-primary mt-4" />
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
