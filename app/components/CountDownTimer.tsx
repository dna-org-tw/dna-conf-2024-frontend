import React from "react";
import { Lang } from "@/types/common";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CountDownTimer({ lang }: { lang: Lang }) {
  const isZhTw = lang === "zh-TW";

  const target = new Date("8/3/2024 23:59:59");
  const now = new Date();
  const difference = target.getTime() - now.getTime();
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

  return (
    <div className="max-w-lg mx-auto">
      <div className="p-4 md:bg-white md:rounded-xl md:p-10 text-white md:text-inherit">
        <div className="text-xl font-bold md:text-center mb-3">
          {isZhTw ? "距離大會開始時間" : "EVENT COUNTDOWN"}
        </div>
        <div className="flex flex-row items-center md:items-start gap-x-4 md:justify-center">
          <div className="flex flex-col md:items-center">
            <span className="text-3xl font-bold">{days}</span>
            <span> {isZhTw ? "天" : "DAYS"} </span>
          </div>
          <span className="hidden md:inline text-3xl font-bold">:</span>
          <div className="flex flex-col md:items-center">
            <span className="text-3xl font-bold">{hours}</span>
            <span> {isZhTw ? "時" : "HRS"} </span>
          </div>
          <span className="hidden md:inline text-3xl font-bold">:</span>

          <div className="flex flex-col md:items-center">
            <span className="text-3xl font-bold">{minutes}</span>
            <span> {isZhTw ? "分" : "MINS"} </span>
          </div>

          <Button
            asChild
            className="rounded-3xl bg-[#E74310] hover:bg-[#E74310] border-white border-2 ml-auto md:hidden"
          >
            <Link href="https://psee.io/5qfa4a" target="_blank">
              {isZhTw ? "線上購票" : "TICKET"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
