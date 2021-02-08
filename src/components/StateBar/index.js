import { css } from '@emotion/react'
import PropTypes from 'prop-types'
import React from 'react'
import { Box } from '../Box'
import { ProgressBar } from '../ProgressBar'
import { Typography } from '../Typography'

const State = ({ label, children, ...props }) => (
  <Typography as="div" variant="bodyA" color="darkBlack" {...props}>
    <strong>{`${label}${children ? ': ' : ''}`}</strong>
    {children}
  </Typography>
)

State.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
}

State.defaultProps = {
  children: null,
  label: '',
}

const line = css`
  flex: 1;
  margin-top: 12px;
`

const Bar = ({ unlimited, value, ...props }) => (
  <ProgressBar
    css={line}
    variant={unlimited ? 'success' : value >= 90 ? 'warning' : 'primary'}
    value={unlimited ? 100 : value}
    {...props}
  />
)

Bar.propTypes = {
  unlimited: PropTypes.bool,
  value: PropTypes.number,
}

Bar.defaultProps = {
  unlimited: false,
  value: 0,
}

const StateBar = Box
StateBar.Bar = Bar
StateBar.State = State

export { StateBar }
