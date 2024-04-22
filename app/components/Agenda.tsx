import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import HeaderTitleWithLine from "./HeaderTitleWithLine";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Session } from "@/lib/notion";

export default async function Agenda({
  lang,
  sessions,
}: {
  lang: Lang;
  sessions: Session[];
}) {
  const { t } = await useServerTranslation(lang);
  console.log(sessions);
  const sessionsByTimeSlots = sessions
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .reduce((acc: Record<string, Session[]>, session) => {
      if (acc[session.timeSlots[0]]) {
        acc[session.timeSlots[0]].push(session);
      } else {
        acc[session.timeSlots[0]] = [session];
      }
      return acc;
    }, {});

  return (
    <>
      <HeaderTitleWithLine title={t("AGENDA")} lineColor="red" />
      <div className="grid md:grid-cols-7 gap-2 max-w-[772px] mx-auto">
        {Object.keys(sessionsByTimeSlots).map((timeSlot, i) => {
          const s = sessionsByTimeSlots[timeSlot];
          const [startTime, endTime] = timeSlot.split("-");
          return (
            <>
              <div
                key={`row-${i}`}
                className="flex md:flex-col justify-center items-center gap-y-1 gap-x-2 bg-[#FFD028] border-[#FFD028] border-2 py-1 md:py-3 px-4 rounded-md mt-6 md:mt-0"
              >
                <div className="font-bold">{startTime}</div>
                <div className="hidden md:block h-6 w-0 border border-black"></div>
                <div className="md:hidden w-4 border border-black"></div>
                <div className="font-bold">{endTime}</div>
              </div>
              {s.map((session, j) => {
                return (
                  <div
                    className={cn(
                      `p-5 border-2 rounded-md flex flex-col justify-between gap-y-4`,
                      {
                        "border-[#00993E]": session.color === "#00993E",
                        "border-[#10B9DA]": session.color === "#10B9DA",
                        "border-[#E74310]": session.color === "#E74310",
                        "md:col-span-6": s.length === 1,
                        "md:col-span-3": s.length === 2,
                        "md:col-span-2": s.length === 3,
                      }
                    )}
                  >
                    {session.status === "Coming Soon" ? (
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
                        <div className="font-bold">{session.title[lang]}</div>
                        <div className="inline-flex gap-x-2">
                          {session.tags?.[lang].map((tag) => (
                            <Badge
                              className={cn("font-normal tracking-wide", {
                                "bg-[#00993E] hover:bg-[#00993E]":
                                  session.color === "#00993E",
                                "bg-[#10B9DA] hover:bg-[#10B9DA]":
                                  session.color === "#10B9DA",
                                "bg-[#E74310] hover:bg-[#E74310]":
                                  session.color === "#E74310",
                              })}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-row justify-between">
                          <div>{session.speaker?.[lang]}</div>
                          {session.location?.[lang] && (
                            <div
                              className={cn("flex gap-3", {
                                "text-[#00993E]": session.color === "#00993E",
                                "text-[#10B9DA]": session.color === "#10B9DA",
                                "text-[#E74310]": session.color === "#E74310",
                              })}
                            >
                              <span
                                className={cn("inline-flex items-baseline")}
                              >
                                <MapPin
                                  size={16}
                                  className="self-center pr-1"
                                />{" "}
                                {session.location?.[lang]}
                              </span>
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </>
          );
        })}
      </div>
    </>
  );
}
