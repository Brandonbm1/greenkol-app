import { createFileRoute, redirect } from '@tanstack/react-router'

// Legacy page, now a section of the landing
export const Route = createFileRoute('/products/$slug')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'productos', replace: true })
  },
})
