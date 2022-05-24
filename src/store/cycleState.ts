import { atom } from "recoil";
export const cycleState = atom<number>({
  key: "cycleState",
  default: 1,
});
