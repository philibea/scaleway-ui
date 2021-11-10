import * as React from 'react'
import { CreateStyledComponent, CreateStyled } from '@emotion/styled'
import { Theme } from '@emotion/react'
import { SystemProps } from '@xstyled/system'
import { BoxElements } from './BoxElements'
declare type BoxStyledTags = {
  [Tag in keyof BoxElements]: CreateStyledComponent<
    SystemProps<Theme> & {
      as?: React.ElementType
      theme?: Theme
    },
    JSX.IntrinsicElements[BoxElements[Tag]]
  >
}
interface CreateXStyled extends CreateStyled, BoxStyledTags {}
export declare const styled: CreateXStyled
export {}
