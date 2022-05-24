import { FC, memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Text } from "@chakra-ui/react";

import { timeSettingState } from "../../store/timeSettingState";
import { InputFormData } from "../../types/InputFormData";
import { cycleState } from "../../store/cycleState";

type Props = {
  stop: (id?: string | undefined) => void;
};

export const Timer: FC<Props> = memo((props) => {
  const { stop } = props;
  const navigate = useNavigate();
  // recoil
  const [timeSettingData, setTimeSettingData] =
    useRecoilState<InputFormData>(timeSettingState);
  const [cycleData, setCycleData] = useRecoilState<number>(cycleState);
  const workingFlg: boolean = timeSettingData.workingFlg;
  let settingTime: number;

  if (workingFlg) {
    settingTime = Number(timeSettingData.workingTime);
  } else {
    settingTime = Number(timeSettingData.restTime);
  }
  const [mins, setMinutes] = useState(settingTime);
  const [secs, setSeconds] = useState(0);
  useEffect(() => {
    let timeInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          setTimeSettingData({
            workingTime: timeSettingData.workingTime,
            restTime: timeSettingData.restTime,
            cycle: timeSettingData.cycle,
            workingFlg: !workingFlg,
          });
          // bgm停止
          stop();
          if (workingFlg) {
            navigate("/restTime");
          } else {
            if (cycleData === Number(timeSettingData.cycle)) {
              navigate("/Ending");
            } else {
              setCycleData(cycleData + 1);
              navigate("/workingTime");
            }
          }
          clearInterval(timeInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  });

  return (
    <Text fontSize="6xl">
      {mins}:{secs < 10 ? `0${secs}` : secs}
    </Text>
  );
});
