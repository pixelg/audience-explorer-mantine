import {AppShell, Burger, Flex, Text, Divider, Group, Image, NavLink, Avatar} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo from "@/assets/sand-logo.svg"
import {useState} from "react";
import {
  IconChartBar,
  IconChartBarPopular,
  IconHome2,
  IconMoneybag,
  IconUsersGroup
} from "@tabler/icons-react"
import {Link, Outlet} from "@tanstack/react-router";
import "./navbar.css";

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
            <Text className="mantine-visible-from-md">Welcome, {name}</Text>
            <Avatar key={name} name={name} color="initials" />
          </Group>
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar className="navbar" p="md">
        <Link to="/">
          <NavLink
            className="navbar"
            href=""
            label="Home"
            leftSection={<IconHome2 size={16} stroke={1.5} />}
          />
        </Link>

        <Link to="/bar-chart">
          <NavLink
            href=""
            label="Bar Chart"
            leftSection={<IconChartBar size={16} stroke={1.5} />}
          />
        </Link>

        <Link to="/box-plot-chart">
          <NavLink
            href=""
            label="Box Plot Chart"
            leftSection={<IconChartBarPopular size={16} stroke={1.5} />}
          />
        </Link>

        <NavLink
          href="#"
          label="Audience Groups"
          leftSection={<IconUsersGroup size={16} stroke={1.5} />}
        />

        <NavLink
          href="#"
          label="Trade"
          leftSection={<IconMoneybag size={16} stroke={1.5} />}
        />
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default TerraformaShell;