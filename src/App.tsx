import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

import { HomePage } from "./components/05_pages/HomePage";
import { RestTimePage } from "./components/05_pages/RestTimePage";
import { WorkingTimePage } from "./components/05_pages/WorkingTimePage";
import { EndingPage } from "./components/05_pages/EndingPage";
import { theme } from "./theme/theme";
import { memo } from "react";

export const App = memo(() => {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/restTime" element={<RestTimePage />} />
            <Route path="/workingTime" element={<WorkingTimePage />} />
            <Route path="/Ending" element={<EndingPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
});
