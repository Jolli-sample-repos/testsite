import { useView } from './ViewContext'

// OpenAPI specs configuration
const API_SPECS = [{"name":"swagger","specPath":"/swagger.json"}]

export default function NavbarApiButton() {
  const { view, setView } = useView()

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {API_SPECS.map((spec) => {
        const isActive = view === `api:${spec.name}`
        return (
          <button
            key={spec.name}
            onClick={() => setView(`api:${spec.name}`)}
            style={{
              padding: '4px 10px',
              fontSize: '14px',
              fontWeight: 500,
              color: isActive ? '#0070f3' : 'inherit',
              backgroundColor: isActive ? 'rgba(0, 112, 243, 0.1)' : 'transparent',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
            title={`View ${spec.name} API Reference`}
          >
            {spec.name} API
          </button>
        )
      })}
    </div>
  )
}
