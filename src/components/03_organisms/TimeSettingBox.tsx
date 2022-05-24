import { ChangeEvent, FC, memo, useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import { PrimaryButton } from "../01_atoms/PrimaryButton";
import { InputFormData } from "../../types/InputFormData";
import { timeSettingState } from "../../store/timeSettingState";
import { ErrorMessage } from "../01_atoms/ErrorMessage";

export const TimeSettingBox: FC = memo(() => {
  const navigate = useNavigate();
  const setInputFormData = useSetRecoilState<InputFormData>(timeSettingState);
  const [workingTime, setWorkingTime] = useState<string>("");
  const [restTime, setRestTime] = useState<string>("");
  const [cycle, setCycle] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // startボタン
  const startPomodoro = () => {
    //===== 入力チェック start ========
    if (workingTime === "" || restTime === "" || cycle === "") {
      setErrorMessage("全ての項目を入力してください");
      return;
    }

    if (Number.isNaN(parseInt(workingTime)) || Number(workingTime) < 0) {
      setErrorMessage("作業時間は0以上の整数で入力してください");
      return;
    }

    if (Number.isNaN(parseInt(restTime)) || Number(restTime) < 0) {
      setErrorMessage("休憩時間は0以上の整数で入力してください");
      return;
    }

    if (Number.isNaN(parseInt(cycle)) || Number(cycle) < 0) {
      setErrorMessage("サイクル回数は0以上の整数で入力してください");
      return;
    }
    //===== 入力チェック end ========

    // recoilに入力値をセット
    setInputFormData({
      workingTime: workingTime,
      restTime: restTime,
      cycle: cycle,
      workingFlg: true,
    });
    navigate("/workingTime");
  };

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "workingTime") {
      setWorkingTime(e.target.value);
    } else if (e.target.name === "restTime") {
      setRestTime(e.target.value);
    } else {
      setCycle(e.target.value);
    }
  };

  return (
    <Box
      rounded={"lg"}
      boxShadow={"lg"}
      p={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="white"
    >
      <Box>
        {errorMessage === "" ? (
          ""
        ) : (
          <Box mb={5}>
            <ErrorMessage fontSize={"sm"}>{errorMessage}</ErrorMessage>
          </Box>
        )}
        <Text fontSize="md" mb={3}>
          作業時間
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
          <Input
            placeholder="25"
            name="workingTime"
            value={workingTime}
            onChange={onChangeText}
          />
          <Text ml={5} fontSize="sm">
            分
          </Text>
        </Box>
        <Text fontSize="md" mb={3}>
          休憩時間
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
          <Input
            placeholder="25"
            name="restTime"
            value={restTime}
            onChange={onChangeText}
          />
          <Text ml={5} fontSize="sm">
            分
          </Text>
        </Box>
        <Text fontSize="md" mb={3}>
          サイクル回数
        </Text>
        <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
          <Input
            placeholder="8"
            name="cycle"
            value={cycle}
            onChange={onChangeText}
          />
          <Text ml={5} fontSize="sm">
            回
          </Text>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
          <PrimaryButton onClick={startPomodoro}>
            Start Pomodoro!!
          </PrimaryButton>
        </Box>
      </Box>
    </Box>
  );
});
