"use client";
import React, { useEffect, useState } from "react";
import { Lang } from "@/types/common";

export default function CountDownTimer({ lang }: { lang: Lang }) {
  const isZhTw = lang === "zh-TW";
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
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
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
            <div className="flex flex-row justify-evenly w-auto text-3xl font-bold">
              <span>{days} 天 </span>
              <span>{hours} 小時 </span>
              <span>{minutes} 分 </span>
              <span>{seconds} 秒 </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white rounded-xl p-10">
            <div className="flex justify-center text-xl font-bold text-center mb-3">
              Event Countdown
            </div>
            <div className="flex flex-row justify-evenly w-auto ">
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{days}</span>
                <span>DAYS </span>
              </div>
              <span className="text-3xl font-bold">:</span>
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{hours}</span>
                <span> HRS </span>
              </div>
              <span className="text-3xl font-bold">:</span>

              <div className="flex flex-col">
                <span className="text-3xl font-bold">{minutes}</span>
                <span> MINS </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
