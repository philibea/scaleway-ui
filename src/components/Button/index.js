import { css } from '@emotion/react'
import { darken, transparentize } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import { colors, radii } from '../../new_theme'
import { ActivityIndicator } from '../ActivityIndicator'
import { Box } from '../Box'
import { Icon } from '../Icon'
import { UniversalLink } from '../UniversalLink'

const borderedVariant = (color, bgColor, hoverColor) => {
  const colorValue = colors[color]
  const bgColorValue = colors[bgColor]
  const hoverColorValue = colors[hoverColor]
  return css`
    border: 1px solid ${colorValue};
    background-color: ${bgColorValue};
    color: ${colorValue};

    svg {
      fill: ${colorValue};
      // safari issue prevent event propgation
      pointer-events: none;
    }

    &:hover,
    &:focus {
      border: 1px solid ${hoverColorValue};
      color: ${bgColorValue};
      background-color: ${hoverColorValue};

      svg {
        fill: ${bgColorValue};
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px ${transparentize(0.75, hoverColorValue)};
    }
  `
}

const plainVariant = (bgColor, textColor) => {
  const bgColorValue = colors[bgColor]
  const textColorValue = colors[textColor]
  return css`
    background-color: ${bgColorValue};
    color: ${textColorValue};

    &:hover,
    &:focus {
      color: ${textColorValue};
      background-color: ${darken(0.05, bgColorValue)};
    }

    &:focus {
      box-shadow: 0 0 0 2px ${transparentize(0.75, bgColorValue)};
    }
  `
}

const variants = {
  primary: plainVariant('primary', 'white'),
  'primary-bordered': borderedVariant('primary', 'white', 'primary'),
  'primary-soft-bordered': borderedVariant('gray350', 'white', 'primary'),
  secondary: plainVariant('gray100', 'gray700'),
  'secondary-bordered': borderedVariant('gray550', 'white', 'primary'),
  success: plainVariant('success', 'white'),
  'success-bordered': borderedVariant('success', 'white', 'success'),
  'success-soft-bordered': borderedVariant('gray350', 'white', 'success'),
  warning: plainVariant('warning', 'white'),
  'warning-bordered': borderedVariant('warning', 'white', 'warning'),
  'warning-soft-bordered': borderedVariant('gray350', 'white', 'warning'),
  info: plainVariant('zumthor', 'blue'),
  'info-bordered': borderedVariant('blue', 'white', 'blue'),
  link: css`
    background-color: ${colors.white};
    color: ${colors.blue};
    vertical-align: baseline;
    font-weight: 400;

    &:hover,
    &:focus {
      color: ${darken(0.2, colors.blue)};
      text-decoration: underline;
    }
  `,
  transparent: css`
    background-color: transparent;
    color: ${colors.gray700};
  `,
}

export const buttonVariants = Object.keys(variants)

const sizes = {
  large: css`
    font-size: 16px;
    line-height: 32px;
    font-weight: 500;
    padding: 8px 16px;
  `,
  medium: css`
    font-size: 16px;
    line-height: 24px;
    padding: 8px 16px;
  `,
  small: css`
    font-size: 16px;
    line-height: 16px;
    padding: 8px 16px;
  `,
  xsmall: css`
    font-size: 14px;
    line-height: 20px;
    padding: 8px;
  `,
  xxsmall: css`
    font-size: 12px;
  `,
}

export const buttonSizes = Object.keys(sizes)

const styles = {
  button: css`
    display: inline-flex;
    border-radius: ${radii.default};
    border-width: 0;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-decoration: none;
    user-select: none;
    outline: none;
    vertical-align: middle;
    white-space: nowrap;
    font-weight: 500;

    transition: color 150ms ease-in-out, background-color 150ms ease-in-out,
      border-color 150ms ease-in-out;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  `,
  content: css`
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  `,
  icon: (margin, position) => css`
    ${position === 'left'
      ? css`
          margin-right: ${margin}px;
        `
      : position === 'right' &&
        css`
          margin-left: ${margin}px;
        `}
    pointer-events: none;
  `,
  disabled: ({ variant }) => css`
    cursor: default;
    pointer-events: none;
    color: ${colors.gray350};

    ${variant !== 'link' &&
    css`
      background-color: ${colors.gray50};
      border-color: ${colors.gray50};
      box-shadow: none;
    `}
  `,
  extend: icon => css`
    & .content {
      transition: max-width 450ms ease, padding 150ms ease, margin 150ms ease;
      max-width: 0;
      margin-right: 0;
      ${icon ? 'padding-right: 0;' : 'padding-left: 0;'};
      overflow: hidden;
    }

    &:focus .content,
    &:hover .content {
      max-width: 275px;
      margin-right: 8px;
      ${icon ? 'padding-right: 8x;' : 'padding-left: 8px;'};
    }
  `,
}

function FwdButton({
  progress,
  disabled,
  variant,
  size,
  icon,
  iconPosition,
  children,
  extend,
  displayProgressOnly,
  type: elementType,
  innerRef,
  ...props
}) {
  const as = props.to
    ? UniversalLink
    : props.href || props.download
    ? 'a'
    : 'button'
  const type = as === 'button' ? elementType : null
  const iconMargin = extend || (progress && displayProgressOnly) ? 0 : 8
  const SmartIcon = () =>
    icon && typeof icon === 'string' ? <Icon name={icon} /> : icon

  return (
    <Box
      {...props}
      ref={innerRef}
      type={type}
      as={as}
      disabled={as === 'button' && disabled}
      aria-disabled={disabled}
      css={[
        styles.button,
        variants[variant],
        sizes[size],
        disabled && styles.disabled(variant),
        extend && styles.extend(icon),
      ]}
    >
      {progress === true ||
      progress === 'left' ||
      (icon && iconPosition === 'left') ? (
        <Box
          display="flex"
          css={styles.icon(iconMargin, children ? 'left' : '')}
        >
          {progress ? (
            <ActivityIndicator color="currentColor" size="1em" />
          ) : (
            <SmartIcon />
          )}
        </Box>
      ) : null}
      {(!progress || !displayProgressOnly) && children && (
        <div css={styles.content} className="content">
          {children}
        </div>
      )}
      {progress === 'right' || (icon && iconPosition === 'right') ? (
        <Box display="flex" css={styles.icon(iconMargin, 'right')}>
          {progress ? (
            <ActivityIndicator color="currentColor" size="1em" />
          ) : (
            <SmartIcon />
          )}
        </Box>
      ) : null}
    </Box>
  )
}

const defaultProps = {
  progress: undefined,
  disabled: false,
  variant: 'primary',
  size: 'large',
  icon: undefined,
  iconPosition: 'left',
  children: null,
  extend: undefined,
  displayProgressOnly: false,
  type: 'button',
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  disabled: PropTypes.bool,
  displayProgressOnly: PropTypes.bool,
  extend: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.func]),
  iconPosition: PropTypes.oneOf(['left', 'right']),
  progress: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['left', 'right']),
  ]),
  size: PropTypes.oneOf(buttonSizes),
  variant: PropTypes.oneOf(buttonVariants),
  type: PropTypes.string,
}

FwdButton.defaultProps = defaultProps

FwdButton.propTypes = propTypes

function forwardRef(props, ref) {
  return <FwdButton {...props} innerRef={ref} />
}

export const Button = React.forwardRef(forwardRef)

Button.defaultProps = defaultProps
Button.propTypes = propTypes

Button.displayName = 'fwd(Button)'
