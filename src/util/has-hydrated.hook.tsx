import { useEffect, useState } from 'react'

function hasHydrated() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hasMounted, setHasMounted] = useState<boolean>(false)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setHasMounted(true)
  }, [])

  return hasMounted
}

export { hasHydrated }
