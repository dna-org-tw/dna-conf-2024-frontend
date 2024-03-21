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
    <>
      <div className="relative w-64 left-0 top-0  md:w-1/2 md:mx-auto">
        <div className="text-white p-5 md:justify-center md:bg-white md:rounded-3xl md:text-black">
          {isZhTw ? (
            <>
              <div className="flex justify-start text-lg font-bold pb-5 md:hidden">
                距離大會開始時間
              </div>
              <div className="hidden md:visible md:flex md:justify-center md:text-2xl md:font-semibold md:pb-5 ">
                購票倒數
              </div>
            </>
          ) : (
            <>
              <div className="flex justify-start text-lg font-bold pb-5 md:hidden">
                Event Countdown
              </div>
              <div className="hidden md:visible md:flex md:justify-center md:text-2xl md:font-semibold md:pb-5 ">
                Event Countdown
              </div>
            </>
          )}
          <div className="flex flex-row justify-start w-auto text-3xl font-bold gap-4 md:justify-center">
            <div className="flex-col md:flex-row">
              <span>{days}  </span>
              <span className='font-normal text-stone-50 text-base md:text-black md:hidden'>days </span>
              <span className='invisible md:visible'>天</span>
            </div>
            <div className="flex-col justify-start">
              <span>{hours}  </span>
              <span className='font-normal text-stone-50 text-base md:text-black  md:hidden'>hrs </span>
              <span className='invisible md:visible'>小時</span>
            </div>
            <div className="flex-col justify-start md:flex-row">
              <span>{minutes}  </span>
              <span className='font-normal text-stone-50 text-base md:text-black  md:hidden'>min </span>
              <span className='invisible md:visible'>分</span>
            </div>
            <div className="flex-col justify-start ">
              <span>{seconds} </span>
              <span className='font-normal text-stone-50 text-base md:text-black md:hidden'>sec </span>
              <span className='invisible md:visible'>秒</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
