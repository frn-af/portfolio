import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const ttNorm = localFont({
  src: "../assets/fonts/TT-Norms-Pro-Bold.otf",
});

interface InfoProps {
  color: string;
  variant?: VariantProps<typeof infoVariants>["variant"];
}

const infoVariants = cva("w-60 h-0.5", {
  variants: {
    variant: {
      light: "bg-[#EEEEEE]",
      dark: "bg-[#424242]",
      primary: "bg-[#DF505F]",
      secondary: "bg-[#1F3982]",
    },
  },
});

const infoTextVariants = cva("uppercase text-sm leading-3", {
  variants: {
    variant: {
      light: "text-[#EEEEEE]",
      dark: "text-[#424242]",
      primary: "text-[#DF505F]",
      secondary: "text-[#1F3982]",
    },
  },
});

export const Info = ({ color, variant }: InfoProps) => {
  return (
    <div>
      <div className={infoVariants({ variant: variant })}></div>
      <div className="flex justify-between">
        <div className={infoTextVariants({ variant: variant })}>
          <div>site under</div>
          <div>construction</div>
        </div>
        <div
          className={cn(
            ttNorm.className,
            infoTextVariants({ variant: variant }),
            "text-sm"
          )}
        >
          {color}
        </div>
      </div>
    </div>
  );
};

// export const Info = ({ color }: InfoProps) => {
//   return (
//     <div>
//       <div className="w-60 h-0.5 bg-[#424242]"></div>
//       <div className="flex justify-between">
//         <div className="uppercase text-sm leading-3">
//           <div>site under</div>
//           <div>construction</div>
//         </div>
//         <div className={cn(ttNorm.className, "text-sm")}>{color}</div>
//       </div>
//     </div>
//   );
// };
