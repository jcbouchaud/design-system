import { createRef } from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button component', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<Button>Click me</Button>)
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveClass('text-primary-foreground')
    expect(button).toHaveClass('h-9')
    expect(button).toHaveClass('px-3')
  })

  it('renders correctly with loading state', () => {
    const { container } = render(<Button loading>Click me</Button>)
    const button = container.querySelector('button')
    expect(button).not.toHaveTextContent('Click me')
    expect(button).toContainElement(container.querySelector('.animate-spin'))
  })

  it('renders correctly with fullWidth state', () => {
    const { container } = render(<Button fullWidth>Click Me</Button>)
    const button = container.querySelector('button')
    expect(button).toHaveClass('w-full')
  })

  it('renders correctly with icon prop', () => {
    const { container } = render(<Button icon={<span />}>Click Me</Button>)
    const button = container.querySelector('button')
    expect(button).toBeInTheDocument()
  })

  it('handles click event correctly', () => {
    const handleClick = vi.fn()
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>)
    const button = getByText('Click me')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })

  it('applies secondary variant correctly', () => {
    const { container } = render(<Button variant="secondary">Click me</Button>)
    const button = container.querySelector('button')
    expect(button).toHaveClass('bg-secondary')
    expect(button).toHaveClass('text-secondary-foreground')
  })

  it('applies danger variant correctly', () => {
    const { container } = render(<Button variant="danger">Click me</Button>)
    const button = container.querySelector('button')
    expect(button).toHaveClass('bg-danger')
    expect(button).toHaveClass('text-danger-foreground')
  })

  it('applies large size variant correctly', () => {
    const { container } = render(<Button size="lg">Click me</Button>)
    const button = container.querySelector('button')
    expect(button).toHaveClass('h-10')
    expect(button).toHaveClass('px-5')
  })

  it('forwards ref correctly', () => {
    const ref = createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Click me</Button>)
    if (ref.current) {
      expect(ref.current.tagName).toBe('BUTTON')
      expect(ref.current.click).toBeDefined() 
    } else {
      fail('Ref is null. Ref forwarding might not be working as expected.')
    }
  })
})