import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { App } from '@components/App'
import { LIGHT } from '@constants/theme'
import { useAppSelector } from '@store/hooks/hooks'
import { persistor, store } from '@store/index'
import { themeMode } from '@store/selectors/themeSelectors'
import { GlobalStyles } from '@styles/GlobalStyles'
import { darkTheme } from '@styles/Theme/darkTheme'
import { lightTheme } from '@styles/Theme/lightTheme'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import 'mapbox-gl/dist/mapbox-gl.css'
import { ErrorBoundary } from '@components/ErrorBoundary'

const MainComponent = () => {
  const theme = useAppSelector(themeMode)

  return (
    <ThemeProvider theme={theme === LIGHT ? lightTheme : darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <MainComponent />
          </PersistGate>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
)
