import { Interpolation, Theme, css } from '@emotion/react'
import PropTypes from 'prop-types'
import React, {
  AllHTMLAttributes,
  ElementType,
  FunctionComponent,
  ReactNode,
  forwardRef,
} from 'react'
import styled, { x } from './emotion'

export interface XStyledProps {
  align?: string
  alignItems?: string
  alignSelf?: string
  as?: string | React.ElementType<unknown>
  backgroundColor?: string
  borderRadius?: string | number
  boxShadow?: string
  color?: string
  display?: string
  flex?: string | number
  flexWrap?: string
  fontSize?: number
  fontWeight?: number
  height?: string | number
  justifyContent?: string
  lineHeight?: string | number
  maxWidth?: string | number
  m?: string | number
  mb?: string | number
  ml?: string | number
  mr?: string | number
  mt?: string | number
  mx?: string | number
  my?: string | number
  overflow?: string
  p?: string | number
  pb?: string | number
  pl?: string | number
  position?: string
  pr?: string | number
  pt?: string | number
  px?: string | number
  py?: string | number
  right?: number
  textAlign?: string
  textOverflow?: string
  textTransform?: string
  top?: number
  verticalAlign?: string
  width?: string | number

  // HTMLAnchorElement.rel
  rel?: string
  // HTMLAnchorElement.target
  target?: string
}

// type BaseStyle = string | number
// type Style = BaseStyle | Record<ScreenSize, string>

// const computeSpace = (cssProperty: string, value: BaseStyle) => {
//   if (space[value as unknown as Spaces]) {
//     return `${cssProperty}: ${space[value as unknown as Spaces]};`
//   }

//   if (typeof value === 'number') {
//     return `${cssProperty}: ${value}px;`;
//   }

//   return `${cssProperty}: ${value};`
// }

// const computeStyle = (cssProperty: string, style?: Style) => {
//   if (style === undefined) return null

//   if (typeof style === 'string' || typeof style === 'number') {
//     return `${computeSpace(cssProperty, style)}`
//   }

//   return Object.entries(style).reduce((acc, [screen, value]) => `${acc}
// @media (min-width: ${screens[screen as ScreenSize]}px) {
//   ${computeSpace(cssProperty, value as BaseStyle)}
// }`, '')
// }

// const XStyled = styled('div', {
//   label: 'test',
//   shouldForwardProp: prop => !['as', 'display'].includes(prop.toString()),
// })<XStyledProps>`
//   ${({ align }) => (align ? `align: ${align};` : null)}
//   ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : null)}
//   ${({ alignSelf }) => (alignSelf ? `align-self: ${alignSelf};` : null)}
//   ${({ backgroundColor }) => backgroundColor ? `background-color: ${backgroundColor};` : null}
//   ${({ borderRadius }) => borderRadius ? `border-radius: ${borderRadius};` : null}
//   ${({ boxShadow }) => (boxShadow ? `box-shadow: ${boxShadow};` : null)}
//   ${({ color }) => (color ? `color: ${color};` : null)}
//   ${({ display }) => computeStyle('display', display)}
//   ${({ flex }) => (flex ? `flex: ${flex};` : null)}
//   ${({ flexWrap }) => (flexWrap ? `flex-wrap: ${flexWrap};` : null)}
//   ${({ fontSize }) => (fontSize ? `font-size: ${fontSize}px;` : null)}
//   ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight};` : null)}
//   ${({ height }) => computeStyle('height', height)}
//   ${({ h }) => computeStyle('height', h)}
//   ${({ justifyContent }) => justifyContent ? `justify-content: ${justifyContent};` : null}
//   ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight};` : null)}
//   ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth};` : null)}
//   ${({ m }) => computeStyle('margin', m)}
//   ${({ mb }) => computeStyle('margin-bottom', mb)}
//   ${({ ml }) => computeStyle('margin-left', ml)}
//   ${({ mr }) => computeStyle('margin-right', mr)}
//   ${({ mt }) => computeStyle('margin-top', mt)}
//   ${({ mx }) => `${computeStyle('margin-left', mx) || ''}
// ${computeStyle('margin-right', mx) || ''}`}
//   ${({ my }) => `${computeStyle('margin-top', my) || ''}
// ${computeStyle('margin-bottom', my) || ''}`}
//   ${({ overflow }) => (overflow ? `overflow: ${overflow};` : null)}
//   ${({ p }) => computeStyle('padding', p)}
//   ${({ pb }) => computeStyle('padding-bottom', pb)}
//   ${({ pl }) => computeStyle('padding-left', pl)}
//   ${({ pr }) => computeStyle('padding-right', pr)}
//   ${({ pt }) => computeStyle('padding-top', pt)}
//   ${({ px }) => `${computeStyle('padding-left', px) || ''}
// ${computeStyle('padding-right', px) || ''}`}
//   ${({ py }) => `${computeStyle('padding-top', py) || ''}
// ${computeStyle('padding-bottom', py) || ''}`}
//   ${({ position }) => (position ? `position: ${position};` : null)}
//   ${({ right }) => (right ? `right: ${right};` : null)}
//   ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : null)}
//   ${({ textOverflow }) => textOverflow ? `text-overflow: ${textOverflow};` : null}
//   ${({ textTransform }) => textTransform ? `text-transform: ${textTransform};` : null}
//   ${({ top }) => (top ? `top: ${top};` : null)}
//   ${({ verticalAlign }) => verticalAlign ? `vertical-align: ${verticalAlign};` : null}
//   ${({ width }) => computeStyle('width', width)}
//   ${({ w }) => computeStyle('width', w)}
//   ${({ rel }) => (rel ? `rel: ${rel};` : null)}
//   ${({ target }) => (target ? `target: ${target};` : null)}
// `

const borderedStyles = ({ theme }: { theme: Theme }) => css`
  padding: ${theme.space['3']};
  border-radius: ${theme.radii.default};
  border: 1px solid ${theme.colors.gray350};
`

const StyledBox = styled(x.div, {
  shouldForwardProp: prop => !['bordered'].includes(prop.toString()),
})<{ bordered?: boolean }>`
  ${({ bordered }) => (bordered ? borderedStyles : null)}
`

export type BoxProps = {
  bordered?: boolean
  children?: ReactNode
  height?: number | string
  width?: number | string
} & Omit<AllHTMLAttributes<HTMLElement>, 'as' | 'size' | 'action'> &
  XStyledProps & {
    css?: Interpolation<Theme>
  }

const forwardType = forwardRef<Element, BoxProps>(() => null)

type BoxType = typeof forwardType & {
  withComponent: (
    element: string | ElementType<unknown>,
  ) => FunctionComponent<BoxProps>
  propTypes: FunctionComponent<BoxProps>['propTypes']
}

// @ts-expect-error We add withComponent & propTypes just below
const Box: BoxType = forwardRef<
  Element | HTMLInputElement | HTMLButtonElement,
  BoxProps
>(({ width, height, bordered = false, ...props }, ref) => (
  // @ts-expect-error As we won't know the Element kind we can't assume that Ref will be a Element
  <StyledBox ref={ref} w={width} h={height} bordered={bordered} {...props} />
))

Box.withComponent =
  (element: string | ElementType<unknown>): FunctionComponent<BoxProps> =>
  props =>
    <Box as={element} {...props} />

Box.propTypes = {
  bordered: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Box
