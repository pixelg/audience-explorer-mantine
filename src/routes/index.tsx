import { createFileRoute } from '@tanstack/react-router'
import WidgetCard from "@/components/WidgetCard.tsx";
import {Flex} from "@mantine/core";

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      direction="row"
      wrap="wrap"
    >
      <WidgetCard p={10} />
      <WidgetCard p={10}/>
    </Flex>
  )
}
