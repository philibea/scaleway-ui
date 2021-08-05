import { Theme, css } from '@emotion/react'
import styled from '@emotion/styled'
import { transparentize } from 'polished'
import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import {
  Tooltip as ReakitTooltip,
  TooltipArrow,
  TooltipReference,
  useTooltipState,
} from 'reakit/Tooltip'
import Box from '../Box'

type TooltipPlacement =
  | 'auto-start'
  | 'auto'
  | 'auto-end'
  | 'top-start'
  | 'top'
  | 'top-end'
  | 'right-start'
  | 'right'
  | 'right-end'
  | 'bottom-end'
  | 'bottom'
  | 'bottom-start'
  | 'left-end'
  | 'left'
  | 'left-start'

const variants = {
  black: ({ theme }: { theme: Theme }) => css`
    background-color: ${theme.colors.black};
    color: ${theme.colors.white};
    fill: ${theme.colors.black};
    box-shadow: 0 2px 5px 5px ${transparentize(0.7, theme.colors.shadow)};
  `,
  white: ({ theme }: { theme: Theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.black};
    fill: ${theme.colors.white};
    box-shadow: 0 2px 5px 5px ${transparentize(0.7, theme.colors.shadow)};
  `,
}

type TooltipVariant = keyof typeof variants

const variantStyles = ({
  variant,
  ...props
}: {
  theme: Theme
  variant: TooltipVariant
}) => variants[variant]?.(props)

const StyledTooltip = styled(Box, {
  shouldForwardProp: prop => !['variant'].includes(prop.toString()),
})<{ variant: TooltipVariant }>`
  border-radius: ${({ theme }) => theme.radii.default};
  opacity: 0;
  font-size: 0.8rem;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  line-height: 16px;
  padding: 8px;
  text-align: center;

  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
  transform-origin: top center;
  transform: translate3d(0, -4px, 0);

  [data-enter] & {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  ${variantStyles}
`

export type TooltipProps = {
  animated?: number | boolean
  baseId?: string
  children: React.ReactNode
  maxWidth?: number
  placement?: TooltipPlacement
  text?: React.ReactNode
  variant?: keyof typeof variants
  visible?: boolean
  zIndex?: number
}

const Tooltip = ({
  animated = 150,
  children,
  text = '',
  placement = 'top',
  visible = false,
  variant = 'black',
  baseId,
  zIndex,
  ...props
}: TooltipProps): JSX.Element => {
  const tooltip = useTooltipState({
    animated,
    baseId,
    placement,
    visible,
  })
  const { setVisible } = tooltip
  useEffect(() => setVisible(visible), [setVisible, visible])

  if (!text) {
    return children as JSX.Element
  }

  return (
    <>
      <TooltipReference {...tooltip}>
        {typeof children === 'function'
          ? referenceProps => children(referenceProps) as JSX.Element
          : children}
      </TooltipReference>
      <ReakitTooltip {...tooltip} style={{ zIndex }}>
        <StyledTooltip variant={variant} {...props}>
          <TooltipArrow {...tooltip} />
          {text}
        </StyledTooltip>
      </ReakitTooltip>
    </>
  )
}

Tooltip.propTypes = {
  animated: PropTypes.number,
  baseId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  placement: PropTypes.string,
  text: PropTypes.node,
  variant: PropTypes.string,
  visible: PropTypes.bool,
  zIndex: PropTypes.number,
}

export default Tooltip