import {createRootRoute} from '@tanstack/react-router'
import '@mantine/core/styles.css';
import {MantineProvider} from "@mantine/core";
// import {TanStackRouterDevtools} from "@tanstack/router-devtools";
import TerraformaShell from "@/components/TerraformaShell.tsx";
import {theme} from "@/theme.ts";

export const Route = createRootRoute({
  component: () => {
    return (
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <TerraformaShell />
        {/*<TanStackRouterDevtools />*/}
      </MantineProvider>
    )
  }
})