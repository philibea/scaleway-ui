import * as React from 'react'
import { Theme } from '@emotion/react'
import { StyledComponent } from '@emotion/styled'
import { StyleGenerator } from '@xstyled/system'
declare type JSXElementKeys = keyof JSX.IntrinsicElements
declare type JSXElements<TProps> = {
  [Key in JSXElementKeys]: StyledComponent<
    TProps & {
      as?: React.ElementType
      theme?: Theme
    },
    JSX.IntrinsicElements[Key]
  >
}
declare type CreateX = <TProps extends object>(
  generator: StyleGenerator,
) => X<TProps>
export interface X<TProps extends object> extends JSXElements<TProps> {
  extend: CreateX
}
export declare const createX: CreateX
export {}
