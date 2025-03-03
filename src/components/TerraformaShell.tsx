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
  const [active, setActive] = useState(0);

  const navLinks = [
    { label: "Home", href: "/", icon: <IconHome2 size={16} stroke={1.5} /> },
    { label: "Bar Chart", href: "/bar-chart", icon: <IconChartBar size={16} stroke={1.5} /> },
    { label: "Box Plot Chart", href: "/box-plot-chart", icon: <IconChartBarPopular size={16} stroke={1.5} /> },
    { label: "Audience Groups", href: "", icon: <IconUsersGroup size={16} stroke={1.5} />},
    { label: "Trade", href: "#", icon: <IconMoneybag size={16} stroke={1.5} />},
  ].map((link, index) => (
    <Link key={link.label} to={link.href}>
      <NavLink
        href=""
        key={`nav-${link.label}`}
        label={link.label}
        leftSection={link.icon}
        active={active === index}
        onClick={() => setActive(index)}
        />
    </Link>
  ));

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
        {navLinks}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default TerraformaShell;