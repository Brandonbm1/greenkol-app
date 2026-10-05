import { createFileRoute, redirect } from '@tanstack/react-router'

// Legacy page, now a section of the landing
export const Route = createFileRoute('/projects/')({
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'proyectos', replace: true })
  },
})
