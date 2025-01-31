import { Meta, Story } from '@storybook/react'
import React from 'react'
import Touchable, { TouchableProps } from '..'

export default {
  component: Touchable,
  parameters: {
    docs: {
      description: {
        component: 'Simple clickable component to execute action when clicked.',
      },
    },
  },
  title: 'Components/Touchable',
} as Meta

const Template: Story<TouchableProps> = args => <Touchable {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Basic Touchable',
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Touchable',
  disabled: true,
}

Disabled.parameters = {
  docs: {
    description: {
      story: 'Disable using `disabled` prop.',
    },
  },
}
