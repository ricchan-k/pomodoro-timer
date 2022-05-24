import { memo } from "react";
import { Text, Box } from "@chakra-ui/react";

import { DefaultTemplete } from "../04_templetes/DefaultTemplete";

export const EndingPage = memo(() => {
  return (
    <DefaultTemplete title={"Well Done!!"}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Text>お疲れさまでした！</Text>
      </Box>
    </DefaultTemplete>
  );
});
