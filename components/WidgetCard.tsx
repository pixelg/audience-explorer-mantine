import { Card, Image, Text } from "@mantine/core";

const WidgetCard = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          height={200}
          width={200}
          alt="Widget"
          src="https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </Card.Section>
      <Card.Section>
        <Text size="lg">Widget</Text>
        <Text size="sm" c="dimmed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Card.Section>
    </Card>
  )
}

export default WidgetCard;