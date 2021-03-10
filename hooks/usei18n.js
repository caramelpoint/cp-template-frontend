import { useRouter } from "next/router"
import messages from "../locales/index"

const usei18n = () => {
  const { locale } = useRouter()
  const translates = messages[locale] || {}

  return [locale, translates]
}

export default usei18n
