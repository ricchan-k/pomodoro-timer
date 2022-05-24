import { FC, memo } from "react";
import { Box, Image } from "@chakra-ui/react";

import { Timer } from "../01_atoms/Timer";
import { CycleCount } from "../01_atoms/CycleCount";

type Props = {
  kvImage: string;
  stop: (id?: string | undefined) => void;
};

export const TimerBox: FC<Props> = memo((props) => {
  const { kvImage, stop } = props;
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CycleCount />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image width="200" height="200" src={kvImage} alt="画像" />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
        <Timer stop={stop} />
      </Box>
    </>
  );
});
