/// <reference types="react" />
import { Theme } from '@emotion/react'
import { SystemProps } from '@xstyled/system'
export declare const x: import('./createX').X<SystemProps<Theme>>
export declare const Box: import('@emotion/styled').StyledComponent<
  SystemProps<Theme> & {
    as?: import('react').ElementType<any> | undefined
    theme?: Theme | undefined
  },
  import('react').DetailedHTMLProps<
    import('react').HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
  {}
>
