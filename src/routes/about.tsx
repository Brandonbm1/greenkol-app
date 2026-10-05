import { createFileRoute, redirect } from '@tanstack/react-router'

// Legacy page, now a section of the landing
export const Route = createFileRoute('/about')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'nosotros', replace: true })
  },
})
