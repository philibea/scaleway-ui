import { SerializedStyles, Theme } from '@emotion/react'
import { CSSInterpolation } from '@emotion/serialize'
interface Props {
  theme?: Theme
}
interface CSSInterpolationFn {
  (props: Props): CSSInterpolation
}
interface SerializedStylesFn {
  (props: Props): SerializedStyles
}
export declare function css(fn: CSSInterpolationFn): SerializedStylesFn
export declare function css(...args: CSSInterpolation[]): SerializedStylesFn
export declare function css(
  strings: TemplateStringsArray,
  ...rawArgs: CSSInterpolation[]
): SerializedStylesFn
export {}
