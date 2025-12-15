import { createFileRoute } from '@tanstack/react-router'
import { ProjectsListPage } from '../../pages/ProjectsListPage'

export const Route = createFileRoute('/projects/')({
  component: ProjectsListPage,
})
