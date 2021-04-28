/* eslint-disable import/no-extraneous-dependencies */
import { createSerializer } from '@emotion/jest'
import renderWithTheme from './renderWithTheme'

expect.addSnapshotSerializer(createSerializer())

export default async (component, { transform, options, theme } = {}) => {
  // Save the instance of console (disable warning about adding element directly to document.body which is necessary when testing portal components)
  const { console } = global
  global.console = { error: jest.fn() }

  const node = renderWithTheme(
    component,
    {
      container: document.body,
      ...options,
    },
    theme,
  )
  if (transform) await transform(node)
  expect(node.asFragment()).toMatchSnapshot()

  // Unmounting to don't see the warning message described above
  node.unmount()
  global.console = console
}
