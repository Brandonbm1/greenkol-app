import { createFileRoute } from '@tanstack/react-router'
import { ProductListPage } from '../../pages/ProductsListPage'
import * as z from "zod"

export const Route = createFileRoute('/products/$slug')({
  params: z.object({
    slug: z.string().min(1)
  }),
  component: ProductListPage,
})
