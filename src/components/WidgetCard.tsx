import { Card, Image, Text } from "@mantine/core";
import logo from "@/assets/blue-logo.svg"

type WidgetCardProps = {
  p?: number;
}

const WidgetCard = ({...props} : WidgetCardProps) => {
  return (
    <Card shadow="sm" padding={props.p} radius="md" withBorder>
      <Card.Section p={props.p}>
        <Image
          height={200}
          width={200}
          alt="Widget"
          src={logo}
          radius="md"
          bd="1px solid hsl(40, 95%, 70%)"
          p={4}
        />
      </Card.Section>
      <Card.Section p={props.p}>
        <Text size="lg">Widget</Text>
        <Text size="sm" c="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Card.Section>
    </Card>
  )
}

export default WidgetCard;