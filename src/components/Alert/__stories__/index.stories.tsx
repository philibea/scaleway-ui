import { Meta, Story } from '@storybook/react'
import React, { ComponentProps } from 'react'
import Alert, { alertTypes, alertVariants } from '..'

export default {
  component: Alert,
  title: 'Components/Feedback/Alert',
} as Meta

const Template: Story<ComponentProps<typeof Alert>> = args => (
  <Alert {...args}>This is an alert</Alert>
)

export const Default = Template.bind({})

export const Types = Template.bind({})
Types.parameters = {
  docs: {
    storyDescription:
      'Using `type` prop you can change the type of the component. Each type has a default icon set.',
  },
}
Types.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {alertTypes.map(type => (
        <Alert key={type} type={type}>
          This is a notification bar with the <b>{type}</b> variant.
        </Alert>
      ))}
    </div>
  ),
]

export const Variants = Template.bind({})
Variants.parameters = {
  docs: {
    storyDescription:
      'Using `variant` prop you can change the style of the component.',
  },
}
Variants.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {alertVariants.map(variant => (
        <Alert type="info" variant={variant}>
          This is a notification bar with the <b>{variant}</b> variant.
        </Alert>
      ))}
    </div>
  ),
]

export const Title = Template.bind({})
Title.parameters = {
  docs: {
    storyDescription:
      'Using `title` prop you can add a custom title to the notification.',
  },
}
Title.decorators = [
  () => (
    <Alert icon="information-outline" type="info" title="Information">
      This is a notification bar with a custom title.
    </Alert>
  ),
]

export const Icon = Template.bind({})
Icon.parameters = {
  docs: {
    storyDescription:
      'Using `icon` prop you can add a custom icon to the notification.',
  },
}
Icon.decorators = [
  () => (
    <Alert icon="clock-outline" type="beta">
      This is a notification bar with a custom icon.
    </Alert>
  ),
]

export const IconSize = Template.bind({})
IconSize.parameters = {
  docs: {
    storyDescription: 'Using `iconSize` prop you can change the icon size.',
  },
}
IconSize.decorators = [
  () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Alert iconSize={24}>
        This is a notification bar with a custom icon size.
      </Alert>
      <Alert iconSize={40} type="info">
        This is a notification bar with a custom icon size.
      </Alert>
    </div>
  ),
]
