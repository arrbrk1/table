import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import TestTable from "./TestTable";

export default function App() {
  return (
    <ChakraProvider>
      <TestTable />
    </ChakraProvider>
  );
}
