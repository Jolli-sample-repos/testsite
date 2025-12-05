import { createContext, useState, useEffect } from 'react'

// Simple global state that works across component trees
// View can be 'docs' or 'api:{specName}' (e.g., 'api:petstore')
let globalView = 'docs'
const listeners = new Set()

function setGlobalView(newView) {
  globalView = newView
  listeners.forEach(listener => listener(newView))
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

// React hook to use the global view state
export function useView() {
  const [view, setView] = useState(globalView)

  useEffect(() => {
    return subscribe(setView)
  }, [])

  return {
    view,
    setView: setGlobalView,
    // Helper to check if current view is an API view
    isApiView: view.startsWith('api:'),
    // Helper to get current API spec name (returns null if docs view)
    currentApiSpec: view.startsWith('api:') ? view.slice(4) : null,
  }
}

// Context for ViewProvider (still useful for SSR hydration)
const ViewContext = createContext({ view: 'docs', setView: () => {}, isApiView: false, currentApiSpec: null })

export function ViewProvider({ children }) {
  const viewState = useView()
  return (
    <ViewContext.Provider value={viewState}>
      {children}
    </ViewContext.Provider>
  )
}
