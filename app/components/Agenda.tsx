import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import HeaderTitleWithLine from "./HeaderTitleWithLine";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Event {
  title: string | null;
  location: string | string[] | null;
  tags?: string[] | null;
  speaker?: string | null;
}
interface Session {
  row: number;
  time: string[];
  events: Event[];
}

const mockData: { conferenceSchedule: Session[] } = {
  conferenceSchedule: [
    {
      row: 1,
      time: ["08:30", "09:00"],
      events: [
        {
          title: "現場報到",
          location: ["一樓 Lobby"],
          tags: null,
        },
      ],
    },
    {
      row: 2,
      time: ["09:00", "09:15"],
      events: [
        {
          title: "OPENING",
          location: ["Room 1001", "Room 1002"],
          tags: null,
        },
      ],
    },
    {
      row: 3,
      time: ["09:15", "10:00"],
      events: [
        {
          title: "設計自己的理想生活",
          location: ["Room 1001", "Room 1002"],
          tags: ["#設計理想生活"],
          speaker: "大瀬良 亮 幹事",
        },
      ],
    },
    {
      row: 4,
      time: ["10:15", "11:00"],
      events: [
        {
          title: "講題一",
          location: "Room 1001",
          tags: ["#新手導向", "#主題標籤"],
          speaker: "講者A",
        },
        {
          title: "講題二",
          location: ["Room 1002"],
          tags: ["#經典回顧", "#主題標籤"],
          speaker: "講者B",
        },
      ],
    },
    {
      row: 5,
      time: ["10:15", "11:00"],
      events: [
        {
          title: "講題一",
          location: ["Room 1001"],
          tags: ["#新手導向", "#主題標籤"],
          speaker: "講者A",
        },
        {
          // 未解鎖狀態
          title: null,
          location: null,
          tags: null,
          speaker: null,
        },
      ],
    },
  ],
};

export default async function Agenda({ lang }: { lang: Lang }) {
  const { t } = await useServerTranslation(lang);
  const isZhTw = lang === "zh-TW";
  return (
    <>
      <HeaderTitleWithLine title={t("AGENDA")} lineColor="red" />
      <div className="grid md:grid-cols-7 gap-2">
        {mockData.conferenceSchedule.map((session) => (
          <>
            <div
              key={`row-${session.row}`}
              className="flex md:flex-col justify-center items-center gap-y-1 gap-x-2 bg-[#FFD028] border-[#FFD028] border-2 py-1 md:py-3 px-4 rounded-md mt-6 md:mt-0"
            >
              <div className="font-bold">{session.time[0]}</div>
              <div className="hidden md:block h-6 w-0 border border-black"></div>
              <div className="md:hidden w-4 border border-black"></div>
              <div className="font-bold">{session.time[1]}</div>
            </div>
            {session.events.map((event, i) => {
              return (
                <div
                  key={`event-${event.title}`}
                  className={cn(
                    "p-5 border-2 rounded-md flex flex-col justify-between gap-y-4 border-[#00993E]",
                    {
                      "md:col-span-6": session.events.length === 1,
                      "md:col-span-3": session.events.length === 2,
                      "md:col-span-2": session.events.length === 3,
                      // "bg-[#00993E1A] bg-opacity-10": true,
                      "border-[#E74310]":
                        !event.title &&
                        !event.location &&
                        !event.tags &&
                        !event.speaker,
                    }
                  )}
                >
                  {!event.title &&
                  !event.location &&
                  !event.tags &&
                  !event.speaker ? (
                    <div className="flex flex-col justify-center items-center text-[#E74310] gap-y-2">
                      <Image
                        src="/images/padlock.png"
                        width={60}
                        height={72}
                        alt="coming soon"
                      />
                      <div className="font-bold">Coming Soon...</div>
                    </div>
                  ) : (
                    <>
                      <div className="font-bold">{event.title}</div>
                      <div className="inline-flex gap-x-2">
                        {event.tags?.map((tag) => (
                          <Badge className="font-normal tracking-wide bg-[#00993E]">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-row justify-between">
                        <div>{event.speaker}</div>
                        <div className="flex gap-3 text-[#00993E]">
                          {typeof event.location === "string" ? (
                            <span className="inline-flex items-baseline">
                              <MapPin size={16} className="self-center pr-1" />{" "}
                              {event.location}
                            </span>
                          ) : (
                            event.location?.map((location, j) => (
                              <>
                                <span
                                  key={`${location}-${j}`}
                                  className="inline-flex items-baseline"
                                >
                                  <MapPin
                                    size={16}
                                    className="self-center pr-1"
                                  />{" "}
                                  {location}
                                </span>
                              </>
                            ))
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </>
        ))}
      </div>
    </>
  );
}
