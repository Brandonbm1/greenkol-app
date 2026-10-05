import { createFileRoute, redirect } from '@tanstack/react-router'

// Legacy page, now a section of the landing
export const Route = createFileRoute('/contact')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'contacto', replace: true })
  },
})
