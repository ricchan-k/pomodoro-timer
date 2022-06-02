import { memo } from "react";

import { TimerBox } from "../03_organisms/TimerBox";
import { PomodoroTemplete } from "../04_templetes/PomodoroTemplete";
import kvImage from "../../images/restTime.png";
import bgm from "../../sounds/restTimeBgm.mp3";

export const RestTimePage = memo(() => {

  const music = new Audio(bgm);
  music.loop = true;
  music.play();

  return (
    <PomodoroTemplete title={"RestTime"}>
      <TimerBox kvImage={kvImage} stop={()=>{music.pause()}} />
    </PomodoroTemplete>
  );
});
