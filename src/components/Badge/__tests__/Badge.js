import React from 'react'
import { Badge } from '..'
import shouldMatchEmotionSnapshot from '../../../helpers/shouldMatchEmotionSnapshot'

test('Badge renders correctly with default values', () => {
  shouldMatchEmotionSnapshot(<Badge>Sample badge</Badge>)
})