import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      className={cn('scrollbar-slim flex w-full gap-1.5 overflow-x-auto pb-1', className)}
      {...props}
    />
  )
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        'text-ink-soft border-rule shrink-0 rounded-full border px-3.5 py-1.5 text-[0.8125rem] font-medium whitespace-nowrap transition-colors duration-200',
        'hover:text-ink hover:border-ink-soft/40',
        'data-[state=active]:bg-ember data-[state=active]:text-primary-foreground data-[state=active]:border-transparent',
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return <TabsPrimitive.Content className={cn('mt-4 outline-none', className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
