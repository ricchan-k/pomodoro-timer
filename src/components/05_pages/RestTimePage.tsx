import { memo } from "react";
import { useSound } from "use-sound";

import { TimerBox } from "../03_organisms/TimerBox";
import { PomodoroTemplete } from "../04_templetes/PomodoroTemplete";
import kvImage from "../../images/restTime.png";
import bgm from "../../sounds/restTimeBgm.mp3";

export const RestTimePage = memo(() => {
  const [play, { stop }] = useSound(bgm);
  play();
  return (
    <PomodoroTemplete title={"RestTime"}>
      <TimerBox kvImage={kvImage} stop={stop} />
    </PomodoroTemplete>
  );
});
