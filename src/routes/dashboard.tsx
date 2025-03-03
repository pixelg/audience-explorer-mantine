import { createFileRoute } from '@tanstack/react-router'
import TerraformaShell from "@/components/TerraformaShell.tsx";

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
      <TerraformaShell />
  )
}
