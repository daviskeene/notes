import { createColorTheme } from '../utils/theme'

const light = createColorTheme({
  background: '#fcfcfc',
  text: '#060606',
})

const oneDarkPro = createColorTheme({
  background: '#21252B',
  text: '#999999',
})

const monokai = createColorTheme({
  background: '#1E1F1C',
  text: '#B67534',
})

const pink = createColorTheme({
  background: '#202020',
  text: '#ff91af',
})

const colors = {
  text: '#fff',
  secondaryText: 'grayText',
  background: '#060606',
  primary: '#3cf',
  secondary: '#e0f',
  muted: '#191919',
  highlight: '#29112c',
  gray: '#999',
  purple: '#c0f',
  modes: {
    light,
    oneDarkPro,
    monokai,
    pink,
  },
}

export default colors
