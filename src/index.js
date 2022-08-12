import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'theme-ui'
import theme from './theme'
import { Global, css } from '@emotion/core'
import { ConfigStoreProvider } from './store/config'

ReactDOM.render(
  <React.StrictMode>
    <Global
      styles={css`
        @-webkit-keyframes opacityBreath {
          50% {
            opacity: 0;
          }
        }

        @keyframes opacityBreath {
          50% {
            opacity: 0;
          }
        }
      `}
    />
    <ThemeProvider theme={theme}>
      <ConfigStoreProvider>
        <App />
      </ConfigStoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)