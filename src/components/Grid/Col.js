import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import React from 'react'
import { screens, space } from '../../theme'
import { up } from '../../utils'
import Box from '../Box'

const GRID_COLUMNS = 12

const getSizeWidth = (size, nbColumns) =>
  `${Math.round((size / nbColumns) * 10 ** 6) / 10 ** 4}%`
const query = (brk, style) => (screens[brk] === 0 ? style : up(brk, style))

const StyledCol = styled(Box, {
  shouldForwardProp: prop =>
    ![...Object.keys(screens), 'gutter'].includes(prop),
})`
  box-sizing: border-box;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
  position: relative;
  width: 100%;
  min-height: 1px;

  padding-left: ${({ gutter }) => space[gutter]};
  padding-right: ${({ gutter }) => space[gutter]};

  ${props =>
    Object.keys(screens)
      .filter(brk => props[brk] && props[brk] !== 0)
      .map(brk => {
        const rule = props[brk]

        if (rule === true) {
          return query(
            brk,
            `
          flex-basis: 0;
          flex-grow: 1;
          max-width: 100%;
        `,
          )
        }

        if (rule === 'auto') {
          return query(
            brk,
            `
          flex: 0 0 auto;
          max-width: none;
          width: auto;
        `,
          )
        }

        const sizeWidth = getSizeWidth(rule, GRID_COLUMNS)

        return query(
          brk,
          `
        flex: 0 0 ${sizeWidth};
        max-width: ${sizeWidth};
      `,
        )
      })}
`

const Col = props => <StyledCol {...props} />

const PropTypesBreakpoint = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number,
])

Col.propTypes = {
  children: PropTypes.node,
  gutter: PropTypes.oneOf(Object.keys(space).map(Number)),
  large: PropTypesBreakpoint,
  medium: PropTypesBreakpoint,
  small: PropTypesBreakpoint,
  xlarge: PropTypesBreakpoint,
  xsmall: PropTypesBreakpoint,
}

Col.defaultProps = {
  children: null,
  gutter: 1,
  large: null,
  medium: null,
  small: null,
  xlarge: null,
  xsmall: null,
}

export default Col
