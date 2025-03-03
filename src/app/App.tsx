// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import Dashboard from "../components/Dashboard.tsx";

const App  = () => (
  <MantineProvider defaultColorScheme="dark">
    <Dashboard />
  </MantineProvider>
)

export default App;
