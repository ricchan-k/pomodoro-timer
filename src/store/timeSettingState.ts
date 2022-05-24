import { atom } from "recoil";
import { InputFormData } from "../types/InputFormData";

export const timeSettingState = atom<InputFormData>({
  key: "timeSettingState",
  default: {
    workingTime: "",
    restTime: "",
    cycle: "",
    workingFlg: false,
  },
});
