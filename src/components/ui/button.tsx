import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius)] text-sm font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-[var(--ease-out-soft)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none",
  {
    variants: {
      variant: {
        default: 'bg-ember text-primary-foreground hover:brightness-110 active:scale-[0.98]',
        outline: 'border border-rule bg-paper-raised hover:bg-muted text-ink',
        ghost: 'hover:bg-muted text-ink-soft hover:text-ink',
        link: 'text-ember underline-offset-4 hover:underline',
        quiet: 'bg-muted text-ink-soft hover:text-ink hover:bg-secondary',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-[0.8125rem]',
        lg: 'h-11 rounded-[var(--radius)] px-6 text-base',
        icon: 'size-9',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size }), className)} {...props} />
}

export { Button, buttonVariants }
