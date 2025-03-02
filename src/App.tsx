// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import TerraformaShell from "./components/TerraformaShell.tsx";

const App  = () => (
  <MantineProvider defaultColorScheme="dark">
    <TerraformaShell />
  </MantineProvider>
)

export default App;
