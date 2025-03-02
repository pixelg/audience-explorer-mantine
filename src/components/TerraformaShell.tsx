import {AppShell, Burger, Flex, Text, Divider, Group, Image, NavLink, Avatar, Card} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import WidgetCard from "./WidgetCard.tsx";
import logo from "@/assets/sand-logo.svg"
import {useState} from "react";
import {IconHome2, IconMoneybag, IconUsersGroup} from "@tabler/icons-react"
import BarNone from "./BarNone.tsx";
import { barData } from "./bar-data.ts";

const TerraformaShell = () => {
  const [opened, { toggle }] = useDisclosure();
  const [name] = useState("Brent Lee");

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Flex m="sm" justify="space-between">
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
          <Group className="mantine-visible-from-md">
            <Image h={32} w={32} src={logo} />
            <Text>Sparrow TV</Text>
            <Divider orientation="vertical" />
            <Text>Audience Explorer</Text>
          </Group>
          <Group>
            <Avatar key={name} name={name} color="initials" />
          </Group>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavLink
          href="#"
          label="Home"
          leftSection={<IconHome2 size={16} stroke={1.5} />}
        /><NavLink
          href="#"
          label="Audience Groups"
          leftSection={<IconUsersGroup size={16} stroke={1.5} />}
        /><NavLink
          href="#"
          label="Trade"
          leftSection={<IconMoneybag size={16} stroke={1.5} />}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Flex
          mb={12}
          gap="md"
          justify="center"
          direction="row"
          wrap="wrap"
        >
          <Card>
            <Card.Section w={800} h={600}>
              <BarNone data={barData} />
            </Card.Section>
          </Card>
        </Flex>
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
      </AppShell.Main>
    </AppShell>
  )
}

export default TerraformaShell;