import { memo } from "react";

import { TimerBox } from "../03_organisms/TimerBox";
import { PomodoroTemplete } from "../04_templetes/PomodoroTemplete";
import kvImage from "../../images/workingTime.png";
import bgm from "../../sounds/workingTimeBgm.mp3";

export const WorkingTimePage = memo(() => {

  const music = new Audio(bgm);
  music.loop = true;
  music.play();

  return (
    <PomodoroTemplete title={"WorkingTime"}>
      <TimerBox kvImage={kvImage} stop={()=>{music.pause()}} />
    </PomodoroTemplete>
  );
});
