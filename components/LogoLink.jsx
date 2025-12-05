import { useView } from './ViewContext'

export default function LogoLink() {
  const { setView } = useView()

  return (
    <span
      onClick={() => setView('docs')}
      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <span style={{ fontWeight: 700 }}>Test Site</span>
    </span>
  )
}
