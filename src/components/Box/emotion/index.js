import {
  Global,
  ThemeContext,
  ThemeProvider,
  css as css$1,
  jsx as jsx$1,
  useTheme,
  withTheme,
} from '@emotion/react'
import * as styled$1 from '@emotion/styled'
import {
  createColorModeProvider,
  createColorStyles,
  transform,
  useThemeBreakpoint,
  useThemeBreakpoints,
  useThemeDown,
  useThemeUp,
} from '@xstyled/core'
import { compose, createPreflight, system, th } from '@xstyled/system'
import { cascade, flatten } from '@xstyled/util'
import { createElement, useCallback, useMemo } from 'react'

export {
  CacheProvider,
  ClassNames,
  Global,
  ThemeContext,
  ThemeProvider,
  keyframes,
  useTheme,
  withEmotionCache,
  withTheme,
} from '@emotion/react'
export {
  getColorModeInitScriptElement,
  getColorModeInitScriptTag,
  useColorMode,
  useViewportWidth,
} from '@xstyled/core'

export * from '@xstyled/system'

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (let i = 1; i < arguments.length; i++) {
        const source = arguments[i]

        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }

      return target
    }

  return _extends.apply(this, arguments)
}

function styleToString(style, props) {
  if (Array.isArray(style))
    return style.reduce((str, style) => str + styleToString(style, props), '')
  if (typeof style === 'function') return styleToString(style(props), props)

  return style
}

function css(strings) {
  for (
    var _len = arguments.length,
      rawArgs = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    rawArgs[_key - 1] = arguments[_key]
  }

  return function (props) {
    const emCssArgs =
      typeof strings === 'function'
        ? css$1(strings(props))
        : css$1.apply(void 0, [strings].concat(rawArgs))

    return {
      ...emCssArgs,
      styles: styleToString(transform(emCssArgs.styles), props),
    }
  }
}

function cx(styles) {
  if (typeof styles === 'string') return styles

  return function (theme) {
    const p = {
      theme,
    }

    function parseStyle(style) {
      if (typeof style === 'object') {
        style = css(style)
      }

      return cascade(style, p)
    }

    if (Array.isArray(styles)) {
      return flatten(styles).map(parseStyle)
    }

    return parseStyle(styles)
  }
}

const jsx = function jsx(type, props) {
  for (
    var _len = arguments.length,
      children = new Array(_len > 2 ? _len - 2 : 0),
      _key = 2;
    _key < _len;
    _key++
  ) {
    children[_key - 2] = arguments[_key]
  }

  if (props == null || !Object.prototype.hasOwnProperty.call(props, 'css')) {
    let _React$createElement

    // @ts-expect-error
    return (_React$createElement = createElement).apply.apply(
      _React$createElement,
      [undefined, arguments].concat(children),
    )
  } // @ts-expect-error

  return jsx$1.apply(
    void 0,
    [type, { ...props, css: cx(props.css) }].concat(children),
  )
}

// @ts-nocheck
const createGlobalStyle = function createGlobalStyle() {
  const styles = css.apply(void 0, arguments)

  function GlobalStyle(props) {
    return createElement(Global, {
      styles: styles(props),
    })
  }

  return withTheme(GlobalStyle)
}

const tags = /* #__PURE__ */ Object.keys(styled$1.default)
const createX = function createX(generator) {
  // @ts-ignore
  const x = {
    extend: function extend() {
      for (
        var _len = arguments.length, generators = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        generators[_key] = arguments[_key]
      }

      return createX(compose.apply(void 0, [generator].concat(generators)))
    },
  }
  tags.forEach(tag => {
    // @ts-ignore
    x[tag] = styled$1.default(tag, {
      shouldForwardProp: function shouldForwardProp(prop) {
        return (
          prop !== 'as' &&
          !prop.startsWith('$') &&
          !generator.meta.props.includes(prop)
        )
      }, // @ts-ignore
    })(() => ['&&{', generator, '}'])
  })

  return x
}

const x = /* #__PURE__ */ createX(system)
const Box = x.div

function flattenArgs(arg, props) {
  if (typeof arg === 'function') return flattenArgs(arg(props), props)
  if (Array.isArray(arg)) return arg.map(arg => flattenArgs(arg, props))

  return arg
}

function getCreateStyle(baseCreateStyle) {
  return function (strings) {
    for (
      var _len = arguments.length,
        args = new Array(_len > 1 ? _len - 1 : 0),
        _key = 1;
      _key < _len;
      _key++
    ) {
      args[_key - 1] = arguments[_key]
    }

    return baseCreateStyle(props => {
      const flattenedArgs = flattenArgs(args, props) // @ts-ignore

      const result = css.apply(void 0, [strings].concat(flattenedArgs))(props)

      return result
    })
  }
} // @ts-ignore

const styled = function styled(component, options) {
  return getCreateStyle(styled$1.default(component, options))
}
styled.box = /* #__PURE__ */ styled(x.div)
Object.keys(styled$1.default).forEach(key => {
  // @ts-ignore
  styled[key] = styled(key) // @ts-ignore

  styled[`${key}Box`] = styled(x[key])
})

function ColorModeStyle(_ref) {
  const { targetSelector } = _ref
  const colorModeStyles = useCallback(
    theme =>
      createColorStyles(theme, {
        targetSelector,
      }),
    [targetSelector],
  )

  return createElement(Global, {
    styles: colorModeStyles,
  })
}

const ColorModeProvider = /* #__PURE__ */ createColorModeProvider({
  ThemeContext,
  ThemeProvider,
  ColorModeStyle,
})

function useBreakpoints() {
  return useThemeBreakpoints(useTheme())
}
function useBreakpoint() {
  return useThemeBreakpoint(useTheme())
}
function useUp(key) {
  return useThemeUp(useTheme(), key)
}
function useDown(key) {
  return useThemeDown(useTheme(), key)
}

const createUseGetter = function createUseGetter(getter) {
  return function (value, defaultValue) {
    const theme = useTheme()

    return useMemo(
      () =>
        getter(
          value,
          defaultValue,
        )({
          theme,
        }),
      [value, defaultValue, theme],
    )
  }
}

const useTh = /* #__PURE__ */ createUseGetter(th)
const useAngle = /* #__PURE__ */ createUseGetter(th.angle)
const useAnimation = /* #__PURE__ */ createUseGetter(th.animation)
const useBorder = /* #__PURE__ */ createUseGetter(th.border)
const useBorderColor = /* #__PURE__ */ createUseGetter(th.borderColor)
const useBorderStyle = /* #__PURE__ */ createUseGetter(th.borderStyle)
const useBorderWidth = /* #__PURE__ */ createUseGetter(th.borderWidth)
const useColor = /* #__PURE__ */ createUseGetter(th.color)
const useDuration = /* #__PURE__ */ createUseGetter(th.duration)
const useFont = /* #__PURE__ */ createUseGetter(th.font)
const useFontSize = /* #__PURE__ */ createUseGetter(th.fontSize)
const useFontWeight = /* #__PURE__ */ createUseGetter(th.fontWeight)
const useInset = /* #__PURE__ */ createUseGetter(th.inset)
const useLetterSpacing = /* #__PURE__ */ createUseGetter(th.letterSpacing)
const useLineHeight = /* #__PURE__ */ createUseGetter(th.lineHeight)
const usePercent = /* #__PURE__ */ createUseGetter(th.percent)
const usePx = /* #__PURE__ */ createUseGetter(th.px)
const useRadius = /* #__PURE__ */ createUseGetter(th.radius)
const useRingWidth = /* #__PURE__ */ createUseGetter(th.ringWidth)
const useShadow = /* #__PURE__ */ createUseGetter(th.shadow)
const useSize = /* #__PURE__ */ createUseGetter(th.size)
const useSpace = /* #__PURE__ */ createUseGetter(th.space)
const useTimingFunctions = /* #__PURE__ */ createUseGetter(th.timingFunctions)
const useTransform = /* #__PURE__ */ createUseGetter(th.transform)
const useTransition = /* #__PURE__ */ createUseGetter(th.transition)
const useTransitionProperty = /* #__PURE__ */ createUseGetter(
  th.transitionProperty,
)
const useZIndex = /* #__PURE__ */ createUseGetter(th.zIndex)

function createGlobalStyle$1() {
  for (
    var _len = arguments.length, styles = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    styles[_key] = arguments[_key]
  }

  return function Preflight() {
    const theme = useTheme() // emotion does not support function interpolation so we do from our side
    // https://github.com/emotion-js/emotion/blob/%40emotion/serialize%401.0.0/packages/serialize/src/index.js#L189

    const parsedStyles = styles.map(style => {
      if (typeof style === 'function') {
        return style({
          theme,
        })
      }

      return style
    })

    return createElement(Global, {
      styles: css$1(parsedStyles),
    })
  }
}

const Preflight = /* #__PURE__ */ createPreflight({
  createGlobalStyle: createGlobalStyle$1,
})

export default styled
export {
  Box,
  ColorModeProvider,
  Preflight,
  createGlobalStyle,
  createX,
  css,
  cx,
  jsx,
  useAngle,
  useAnimation,
  useBorder,
  useBorderColor,
  useBorderStyle,
  useBorderWidth,
  useBreakpoint,
  useBreakpoints,
  useColor,
  useDown,
  useDuration,
  useFont,
  useFontSize,
  useFontWeight,
  useInset,
  useLetterSpacing,
  useLineHeight,
  usePercent,
  usePx,
  useRadius,
  useRingWidth,
  useShadow,
  useSize,
  useSpace,
  useTh,
  useTimingFunctions,
  useTransform,
  useTransition,
  useTransitionProperty,
  useUp,
  useZIndex,
  x,
}
// # sourceMappingURL=emotion.esm.js.map
