import { createFileRoute } from "@tanstack/react-router";
import * as z from "zod";
import { HomePage } from "../pages/HomePage";

export const Route = createFileRoute("/")({
  validateSearch: z.object({
    producto: z.string().optional(),
  }),
  component: HomePage,
});
