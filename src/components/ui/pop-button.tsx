import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const popButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-comic text-lg font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-comic shadow-comic hover:shadow-comic-lg transform hover:-translate-y-1 active:translate-y-0 active:shadow-comic",
  {
    variants: {
      variant: {
        primary: "bg-pop-orange text-white hover:bg-pop-orange/90 pop-wiggle",
        secondary: "bg-pop-pink text-white hover:bg-pop-pink/90 pop-wiggle",
        accent: "bg-pop-yellow text-black hover:bg-pop-yellow/90 pop-wiggle",
        outline: "bg-white text-black hover:bg-gray-50 pop-wiggle",
        bouncy: "bg-pop-blue text-white pop-bounce",
      },
      size: {
        default: "h-14 px-8 py-3 rounded-xl",
        sm: "h-10 px-6 py-2 rounded-lg text-base",
        lg: "h-16 px-12 py-4 rounded-2xl text-xl",
        icon: "h-14 w-14 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface PopButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof popButtonVariants> {
  asChild?: boolean
}

const PopButton = React.forwardRef<HTMLButtonElement, PopButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(popButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
PopButton.displayName = "PopButton"

export { PopButton, popButtonVariants }