import { createFileRoute } from '@tanstack/react-router'
import {Card, Flex, Title} from "@mantine/core";
import BarNone from "@/components/BarNone.tsx";
import {barData} from "@/components/bar-data.ts";

export const Route = createFileRoute('/bar-chart')({
  component: BarChartComponent,
})

function BarChartComponent() {
  return (
    <>
      <Flex mb="lg" justify="center">
        <Title>Bar Chart</Title>
      </Flex>

      <Flex
        mb={12}
        gap="md"
        justify="center"
        direction="row"
        wrap="wrap"
      >
        <Card radius='md' w="max-content">
          <Card.Section p={10} miw={800} pl={4} h={600}>
            <BarNone data={barData} />
          </Card.Section>
        </Card>
      </Flex>
    </>
  )
}
