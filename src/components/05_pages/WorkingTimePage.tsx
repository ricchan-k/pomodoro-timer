import { memo } from "react";
import { useSound } from "use-sound";

import { TimerBox } from "../03_organisms/TimerBox";
import { PomodoroTemplete } from "../04_templetes/PomodoroTemplete";
import kvImage from "../../images/workingTime.png";
import bgm from "../../sounds/workingTimeBgm.mp3";

export const WorkingTimePage = memo(() => {
  const [play, { stop }] = useSound(bgm);
  play();
  return (
    <PomodoroTemplete title={"WorkingTime"}>
      <TimerBox kvImage={kvImage} stop={stop} />
    </PomodoroTemplete>
  );
});
