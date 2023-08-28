import React from 'react';
import ToDo from "./components/ToDo/index";
import Settings from "../src/Context/Settings/index";


import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Settings>
        <ToDo />
      </Settings>
    </MantineProvider>
  );
}
