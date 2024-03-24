"use client";
import React, { useEffect, useState } from "react";
import { Lang } from "@/types/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
      <div className="p-4 md:bg-white md:rounded-xl md:p-10 text-white md:text-inherit">
        <div className="text-xl font-bold md:text-center mb-3">
          {isZhTw ? "距離大會開始時間" : "EVENT COUNTDOWN"}
        </div>
        <div className="flex flex-row items-center md:items-start gap-x-4 md:justify-center">
          <div className="flex flex-col md:items-center">
            <span className="text-3xl font-bold">{days}</span>
            <span>DAYS </span>
          </div>
          <span className="hidden md:inline text-3xl font-bold">:</span>
          <div className="flex flex-col md:items-center">
            <span className="text-3xl font-bold">{hours}</span>
            <span> HRS </span>
          </div>
          <span className="hidden md:inline text-3xl font-bold">:</span>

          <div className="flex flex-col md:items-center">
            <span className="text-3xl font-bold">{minutes}</span>
            <span> MINS </span>
          </div>

          <div className="flex flex-col md:hidden">
            <span className="text-3xl font-bold">{seconds}</span>
            <span> SECS </span>
          </div>

          <Button
            asChild
            className="rounded-3xl bg-[#E74310] hover:bg-[#E74310] border-white border-2 ml-auto md:hidden"
          >
            <Link href="https://dna.kolable.app/projects/c8d45648-a2f6-4675-a8e0-fbbd907c5789">
              TICKET
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
