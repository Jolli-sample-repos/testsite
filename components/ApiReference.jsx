import { useView } from './ViewContext'

// Map of spec name to API docs HTML path
const API_DOCS_MAP = {"swagger":"/api-docs-swagger.html"}

export default function ApiReference() {
  const { currentApiSpec } = useView()

  // Get the HTML path for the current API spec
  const htmlPath = currentApiSpec ? API_DOCS_MAP[currentApiSpec] : null

  if (!htmlPath) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 'var(--nextra-navbar-height, 64px)',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        backgroundColor: '#fff',
      }}
    >
      <iframe
        src={htmlPath}
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        title={`${currentApiSpec} API Reference`}
      />
    </div>
  )
}
