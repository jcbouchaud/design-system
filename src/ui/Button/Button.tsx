import { forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/utils'
import { Spinner } from '../Spinner'

const buttonVariants = cva(
  'group inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-accent',
        danger: 'bg-danger text-danger-foreground hover:bg-danger/90'
      },
      size: {
        sm: 'h-9 px-3',
        lg: 'h-10 px-5',
      },
      iconDisposition: {
        left: 'flex-row-reverse',
        right: 'flex-row',
        'icon-only': 'icon-only'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
        loading?: boolean;
        fullWidth?: boolean;
        icon?: React.ReactElement;
        iconDisposition?: 'left' | 'right' | 'icon-only';
    }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading = false, fullWidth = false, iconDisposition = 'right', icon, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, iconDisposition }), className, fullWidth && 'w-full', loading && 'loading relative')}
        ref={ref}
        {...props}
      >
        {(
          <>
            {<Spinner className='hidden absolute group-[.loading]:block'/>}
            <span className='group-[.icon-only]:hidden group-[.loading]:opacity-0'>{children}</span>
            {icon && <span className='group-[.loading]:opacity-0'>{icon}</span>}
          </>
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
