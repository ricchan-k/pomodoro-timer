import { memo } from "react";

import { TimeSettingBox } from "../03_organisms/TimeSettingBox";
import { DefaultTemplete } from "../04_templetes/DefaultTemplete";

export const HomePage = memo(() => {
  return (
    <DefaultTemplete title={"Pomodoro Timer"}>
      <TimeSettingBox />
    </DefaultTemplete>
  );
});
