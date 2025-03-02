import { AppShell, Burger, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import WidgetCard from "./WidgetCard.tsx";

const TerraformaShell = () => {
  const [opened, { toggle }] = useDisclosure();

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
        <Burger
          opened={opened}
          onClick={toggle}
          hiddenFrom="sm"
          size="sm"
        />
        <div>Logo</div>
      </AppShell.Header>
      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>
      <AppShell.Main>
        <Flex
          mih={50}
          gap="md"
          justify="center"
          direction="row"
          wrap="wrap"
        >
          <WidgetCard/>
          <WidgetCard/>
        </Flex>
      </AppShell.Main>
    </AppShell>
  )
}

export default TerraformaShell;