import { Meta, Story } from '@storybook/react'
import React, { ChangeEvent, ComponentProps } from 'react'
import SwitchButton from '..'
import ControlValue from '../../../__stories__/components/ControlValue'

export default {
  args: {
    checked: false,
    children: 'This is a children',
    disabled: false,
    name: 'default',
    onChange: (value: unknown) => console.log(value),
    tooltip: undefined,
    value: 'a',
    variant: undefined,
  },
  argTypes: {
    children: {
      defaultValue: 'This is a children',
      name: 'children',
      table: {
        defaultValue: { summary: 'This is a children' },
        type: { summary: 'string' },
      },
      type: { name: 'string', required: true },
    },
    variant: {
      description: `you have the possibility between "undefined | segment"`,
      name: 'variant',
      options: [undefined, 'segment'],
      table: {
        defaultValue: { summary: 'default' },
        type: { summary: 'select' },
      },
    },
  },
  component: SwitchButton,
  parameters: {
    docs: {
      description: {
        component:
          'SwitchButton is an advanced version of Switch component made out of two different buttons.',
      },
    },
  },
  title: 'Components/Data Entry/SwitchButton',
} as Meta

const Template: Story<ComponentProps<typeof SwitchButton>> = args => (
  <SwitchButton {...args} />
)

Template.args = {
  checked: false,
  children: 'This is a children',
  disabled: false,
  name: 'default',
  onChange: value => console.log(value),
  tooltip: undefined,
  value: 'a',
  variant: undefined,
}

export const Default = Template.bind({})

const DefaultShowcase: Story<{
  controlValue: string | number
  variant?: 'segment'
  disabled: boolean
}> = ({ controlValue = 'a', disabled = false, variant }) => (
  <ControlValue value={controlValue}>
    {({ value, onChange }) => (
      <div style={{ display: 'flex', gap: 16 }}>
        <SwitchButton
          name="switch"
          value="a"
          disabled={disabled}
          variant={variant}
          checked={value === 'a'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.currentTarget.value)
          }
        >
          This is A
        </SwitchButton>
        <SwitchButton
          name="switch"
          value="b"
          disabled={disabled}
          variant={variant}
          checked={value === 'b'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.currentTarget.value)
          }
        >
          This is B
        </SwitchButton>
        <SwitchButton
          name="switch"
          value="c"
          disabled={disabled}
          variant={variant}
          checked={value === 'c'}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange(e.currentTarget.value)
          }
        >
          This is C
        </SwitchButton>
      </div>
    )}
  </ControlValue>
)

export const Showcase = DefaultShowcase.bind({})

Showcase.parameters = {
  docs: {
    description: {
      story: 'This is a showcase of SwitchButton with three SwitchButton',
    },
  },
}
