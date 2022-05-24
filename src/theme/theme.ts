import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "green.50",
        color: "gray.800",
        
      },
      fonts: {
        heading: "Inter, sans-serif;",
        body: "Inter, sans-serif;",
      },
      _placeholder: {
        color: "gray.300"
      }
    },
  },
});
