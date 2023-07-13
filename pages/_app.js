import '@/styles/globals.css'
// @ 根目錄的意思

import '@/styles/product-table.module.css'
import '@/styles/menu.css'
import '@/styles/book-list.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
