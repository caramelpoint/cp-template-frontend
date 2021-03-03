import GlobalStyle from "../styles/globalStyles"

import { i18n } from "@lingui/core"
import { I18nProvider } from "@lingui/react"
import usei18n from "../hooks/usei18n"

function MyApp({ Component, pageProps }) {
  const [locale, translates] = usei18n()
  i18n.load(locale, translates)
  i18n.activate(locale)

  return (
    <I18nProvider i18n={i18n}>
      <GlobalStyle />
      <Component {...pageProps} />
    </I18nProvider>
  )
}

export default MyApp
