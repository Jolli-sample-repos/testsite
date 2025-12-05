import 'nextra-theme-docs/style.css'
import dynamic from 'next/dynamic'
import { ViewProvider, useView } from '../components/ViewContext'

const ApiReference = dynamic(() => import('../components/ApiReference'), {
  ssr: false,
})

function AppContent({ Component, pageProps }) {
  const { isApiView } = useView()

  return (
    <>
      <Component {...pageProps} />
      {isApiView && <ApiReference />}
    </>
  )
}

export default function App(props) {
  return (
    <ViewProvider>
      <AppContent {...props} />
    </ViewProvider>
  )
}
