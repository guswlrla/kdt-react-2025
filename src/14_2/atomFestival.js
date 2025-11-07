import { atom } from "jotai";

export const selGuAtom = atom(null);

export const festivalFetchData = atom(async() => {
    const api = import.meta.env.VITE_API_KEY;
    const baseUrl = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?";
    const url = `${baseUrl}serviceKey=${api}&pageNo=1&numOfRows=41&resultType=json`;

    const resp = await fetch(url);
    const data = await resp.json();
    return data.getFestivalKr.item; // setData대신 return을 함
});