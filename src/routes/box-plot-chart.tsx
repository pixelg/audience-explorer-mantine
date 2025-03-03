import { createFileRoute } from '@tanstack/react-router'
import {Card, Flex, Title} from "@mantine/core";
import {BoxPlot} from "@/components/BoxPlot";
import {boxPlotData} from "@/components/box-plot-data.ts";

export const Route = createFileRoute('/box-plot-chart')({
  component: BoxPlotRoute,
})

function BoxPlotRoute() {
  return (
    <>
      <Flex mb="lg" justify="center">
        <Title>Sales Across Groups</Title>
      </Flex>

      <Flex
        mb={12}
        gap="md"
        justify="center"
        direction="row"
        wrap="wrap"
      >

        <Card radius="md" w="max-content">
          <Card.Section p={10} miw={800} pl={4} h={600}>
            <BoxPlot data={boxPlotData} />
          </Card.Section>
        </Card>
      </Flex>
    </>
  )
}
