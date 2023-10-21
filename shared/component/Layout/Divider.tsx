import cn from 'classnames'

interface DividerProps {
  className?: string
}

export const Divider = ({ className }: DividerProps) => (
  <div
    className={cn(
      'bg-secondary-300 my-2 h-[1.25px] w-full dark:bg-slate-800',
      className
    )}
  />
)
