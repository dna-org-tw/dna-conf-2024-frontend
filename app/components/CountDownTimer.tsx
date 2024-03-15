"use client";
import React, { useEffect, useState } from "react";
import { Lang } from "@/types/common";
import { useServerTranslation } from "@/i18n";

export default function CountDownTimer({ lang }: { lang: Lang }) {
  const isZhTw = lang === "zh-TW";
  // const { t } = await useServerTranslation(lang);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("8/3/2024 23:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-lg mx-auto">
      {isZhTw ? (
        <>
          <div className="bg-white rounded-3xl p-5">
            <div className="flex justify-center text-lg font-bold pb-5">
              大會倒數
            </div>
            <div className="flex flex-row justify-center w-auto text-3xl font-bold">
              <span>{days} 天 </span>
              <span>{hours} 小時 </span>
              <span>{minutes} 分 </span>
              <span>{seconds} 秒 </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white rounded-xl">
            <div className="flex justify-center">countdown</div>
            <div className=" flex flex-row justify-center w-auto 	">
              <span>{days} days </span>
              <span>{hours} hrs </span>
              <span>{minutes} min </span>
              <span>{seconds} sec </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
