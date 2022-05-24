import { memo } from "react";
import { useRecoilValue } from "recoil";
import { Text } from "@chakra-ui/react";

import { cycleState } from "../../store/cycleState";
import { timeSettingState } from "../../store/timeSettingState";
import { InputFormData } from "../../types/InputFormData";

export const CycleCount = memo(() => {
  // recoilからデータを取得し設定する
  const cycleCount = useRecoilValue<number>(cycleState);
  const timeSetting = useRecoilValue<InputFormData>(timeSettingState);
  return (
    <Text fontSize="2xl">
      {cycleCount} / {timeSetting.cycle} サイクル
    </Text>
  );
});
