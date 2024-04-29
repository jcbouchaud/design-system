import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { ArrowRight } from 'lucide-react'

const meta = {
  title: 'Design-system/Button',
  component: Button,
  argTypes: {
    loading: {
      control: { type: 'boolean' },
    },
    fullWidth: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    variant: {
      options: ['primary', 'secondary', 'danger'],
      control: { type: 'radio' }
    },
    size: {
      options:  ['sm', 'lg'],
      control: { type: 'radio' }
    },
    iconDisposition:{
      options: ['left', 'right', 'icon-only'],
      control: { type: 'radio' }
    }
  },
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'sm',
    loading: false,
    fullWidth: false,
    disabled: false,
    icon: <ArrowRight width={16} height={16} />,
    iconDisposition: 'right',
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Button',
  },
}