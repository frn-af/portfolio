import { cn } from '@/lib/utils';
import React from 'react';

const MaxWidthWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <main
    ref={ref}
    className={cn(
      "max-w-screen-2xl mx-auto p-4",
      className
    )}
    {...props}
  />
))
MaxWidthWrapper.displayName = "MaxWidthWrapper"
export default MaxWidthWrapper;
