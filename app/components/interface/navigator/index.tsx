import { useCallback, useEffect, useState } from 'react'

export function Navigator() {
  const [open, setOpen] = useState(false)

  const handleUserKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const { metaKey, ctrlKey, code } = event

      if ((metaKey || ctrlKey) && code === 'KeyK') {
        event.preventDefault()
        setOpen(!open)
      }

      if (code === 'Escape') {
        setOpen(false)
      }
    },
    [open, setOpen]
  )

  useEffect(() => {
    if (window.document !== undefined) {
      window.addEventListener('keydown', handleUserKeyPress)
    }

    return () => window.removeEventListener('keydown', handleUserKeyPress)
  }, [handleUserKeyPress])

  return <div className="fixed bottom-10 right-10"></div>
}
