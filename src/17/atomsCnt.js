import { atom } from "jotai";

export const atomCnt = atom(0); // 변수 생성
export const dbAtomCnt = atom((get) => get(atomCnt) * 2);