"use server";

import { useServerTranslation } from "@/i18n";
import { Lang } from "@/types/common";
import HeaderTitleWithLine from "./HeaderTitleWithLine";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Speaker, Session } from "@/lib/notion";
import { SpeakerSessionDialog } from "./SpeakerSessionDialog";

const getSessionsDuringTimeSection = (
  sessions: Session[],
  timeSection: string
) =>
  sessions
    .filter((session) => session.timeSection === timeSection)
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .reduce((acc: Record<string, Session[]>, session) => {
      if (acc[session.timeSlots[0]]) {
        acc[session.timeSlots[0]].push(session);
      } else {
        acc[session.timeSlots[0]] = [session];
      }
      return acc;
    }, {});

function hasSameLocation(sessions: Session[]) {
  const baseLocation = sessions[0].location;
  return sessions.every((session) => {
    return (
      session.status !== "Coming Soon" &&
      JSON.stringify(session.location) === JSON.stringify(baseLocation)
    );
  });
}

function hasSpeaker(session: Session) {
  return Boolean(session.speakerIDs && session.speakerIDs.length > 0);
}

function SessionBlock({
  session,
  speakers,
  lang,
  className,
}: {
  session: Session;
  speakers: Speaker[];
  lang: Lang;
  className?: string;
}) {
  const speaker = hasSpeaker(session)
    ? speakers.find((speaker) => session.speakerIDs.includes(speaker.id))
    : undefined;
  return (
    <div
      className={cn(
        `flex-1 p-5 border-2 rounded-md flex flex-col justify-between gap-y-4`,
        {
          "border-[#00993E]": session.color === "#00993E",
        },
        className
      )}
      style={{ borderColor: session.color }}
    >
      {session.status === "Coming Soon" ? (
        <div className="flex flex-col justify-center items-center gap-y-2">
          <svg
            width="63"
            height="77"
            viewBox="0 0 63 77"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9206 2.91073C5.22973 6.80881 1.75346 14.3028 3.12545 21.8705C3.31751 22.9294 3.729 24.1928 5.18458 28.192L7.00377 33.1901L5.51187 33.7332C3.80564 34.3542 2.87108 34.9389 2.06937 35.8869C1.38112 36.7005 0.699665 38.1619 0.518786 39.2121C0.217406 40.9612 -0.0197502 40.2072 6.24199 57.4112C12.5037 74.6152 12.2008 73.8852 13.5559 75.0314C14.3696 75.7196 15.831 76.4011 16.8812 76.582C18.6506 76.8869 17.4494 77.2759 39.3089 69.3197C61.1685 61.3635 59.9982 61.8376 61.1577 60.4666C61.8459 59.653 62.5274 58.1916 62.7082 57.1414C63.0096 55.3923 63.2468 56.1463 56.985 38.9423C52.008 25.2681 51.2197 23.1828 50.7945 22.5664C49.4684 20.6439 46.9957 19.4909 44.6705 19.7107C44.1458 19.7603 43.2405 20.0011 42.3244 20.3345L40.8325 20.8775L39.0133 15.8793C37.5577 11.8801 37.0608 10.6478 36.5273 9.71323C32.6957 3.00225 25.1392 -0.521733 17.5458 0.861229C15.9236 1.15654 13.2753 2.12151 11.9206 2.91073ZM19.6482 6.66812C23.105 6.33959 26.7581 7.64108 29.2012 10.0712C30.9994 11.8599 31.0497 11.9561 33.2295 17.7711L35.167 22.9396L23.9181 27.0338L12.6693 31.1281L10.8312 25.9234C8.76239 20.0655 8.73886 19.958 8.9694 17.435C9.31365 13.6694 11.3803 10.3802 14.7067 8.30418C15.7301 7.66547 18.3777 6.78892 19.6482 6.66812ZM30.4961 38.0014C31.7414 38.0986 33.3474 38.8334 34.2582 39.7228C34.8742 40.324 35.0694 40.6269 35.4861 41.6262C36.027 42.924 36.1374 43.8123 35.914 45.0733C35.796 45.74 34.938 47.5653 34.7023 47.6511C34.6315 47.6769 35.118 49.1709 35.8701 51.2373L37.1592 54.7791L37.0658 55.6009C37.0049 56.1363 36.8307 56.614 36.5656 56.972C36.2135 57.4478 36.0235 57.5708 35.1486 57.8893C34.262 58.212 34.0528 58.2365 33.4409 58.0897C32.958 57.9738 32.5688 57.7474 32.1751 57.3532C31.6192 56.7967 31.5783 56.7064 30.3269 53.272L29.0471 49.76L28.6357 49.701C27.9806 49.6072 26.4997 48.7666 25.793 48.0876C25.194 47.5123 25.1007 47.3456 24.5923 45.9435C24.0955 44.5735 24.0487 44.3352 24.1188 43.534C24.2021 42.5827 24.8286 40.9589 25.3838 40.2554C26.1467 39.2888 26.8513 38.8273 28.2675 38.3668C29.363 38.0106 29.767 37.9444 30.4961 38.0014Z"
              fill={session.color}
            />
          </svg>

          <div
            className={cn("font-bold", {
              "text-[#00993E]": session.color === "#00993E",
            })}
            style={{ color: session.color }}
          >
            Coming Soon...
          </div>
        </div>
      ) : (
        <>
          <div className="font-bold">{session.title[lang]}</div>
          <div className="inline-flex gap-x-2">
            {session.tags?.[lang].map((tag, i) => (
              <Badge
                key={`${tag}-${i}`}
                className={cn(
                  "font-normal tracking-wide bg-[#00993E] hover:bg-current"
                )}
                style={{ backgroundColor: session.color }}
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex flex-row justify-between">
            <div>{lang === "zh-TW" ? speaker?.title : speaker?.name}</div>
            {session.location?.[lang] && (
              <div
                className={cn("flex gap-3 text-[#00993E]")}
                style={{ color: session.color }}
              >
                <span className={cn("inline-flex items-baseline")}>
                  <MapPin size={16} className="self-center pr-1" />{" "}
                  {session.location?.[lang]}
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default async function Agenda({
  lang,
  speakers,
  sessions,
}: {
  lang: Lang;
  speakers: Speaker[];
  sessions: Session[];
}) {
  const { t } = await useServerTranslation(lang);
  const morningSessions = getSessionsDuringTimeSection(sessions, "morning");
  const beforeTeaSessions = getSessionsDuringTimeSection(
    sessions,
    "before tea"
  );
  const afterTeaSessions = getSessionsDuringTimeSection(sessions, "after tea");
  const eveningSessions = getSessionsDuringTimeSection(sessions, "evening");

  return (
    <>
      <HeaderTitleWithLine title={t("AGENDA")} lineColor="red" />
      <div className="grid md:grid-cols-7 gap-2 max-w-[772px] mx-auto">
        {Object.keys(morningSessions).map((timeSlot, i) => (
          <SessionTable
            key={`session-table-${i}`}
            timeSlotSessions={morningSessions}
            timeSlot={timeSlot}
            i={i}
            lang={lang}
            speakers={speakers}
          />
        ))}
        <div className="md:col-span-7 flex m-5 p-2 justify-center text-center font-bold">
          {t("Lunch break")}
        </div>
        {Object.keys(beforeTeaSessions).map((timeSlot, i) => (
          <SessionTable
            key={`session-table-${i}`}
            timeSlotSessions={beforeTeaSessions}
            timeSlot={timeSlot}
            i={i}
            lang={lang}
            speakers={speakers}
          />
        ))}
        <div className="md:col-span-7 flex m-5 p-2 justify-center text-center font-bold">
          {t("Tea time")}
        </div>
        {Object.keys(afterTeaSessions).map((timeSlot, i) => (
          <SessionTable
            key={`session-table-${i}`}
            timeSlotSessions={afterTeaSessions}
            timeSlot={timeSlot}
            i={i}
            lang={lang}
            speakers={speakers}
          />
        ))}
        <div className="md:col-span-7 flex m-5 p-2 justify-center text-center font-bold">
          {t("Closing Speech and Endowment")}
        </div>
        {Object.keys(eveningSessions).map((timeSlot, i) => (
          <SessionTable
            key={`session-table-${i}`}
            timeSlotSessions={eveningSessions}
            timeSlot={timeSlot}
            i={i}
            lang={lang}
            speakers={speakers}
          />
        ))}
      </div>
    </>
  );
}

function SessionTable({
  timeSlotSessions,
  timeSlot,
  i,
  lang,
  speakers,
}: {
  timeSlotSessions: Record<string, Session[]>;
  timeSlot: string;
  i: number;
  lang: Lang;
  speakers: Speaker[];
}) {
  const s = timeSlotSessions[timeSlot];
  const [startTime, endTime] = timeSlot.split("-");

  function sessionSpeaker(session: Session) {
    return speakers.find((speaker) => session.speakerIDs.includes(speaker.id));
  }

  const sessionLocationSame = s.every((session) => {
    return (
      JSON.stringify(session.location) === JSON.stringify(s[0].location) &&
      session.status !== "Coming Soon"
    );
  });

  return (
    <>
      <div
        key={`row-${i}`}
        className={cn(
          "flex md:flex-col justify-center items-center gap-y-1 gap-x-2 bg-[#FFD028] border-[#FFD028] border-2 py-1 md:py-3 px-4 rounded-md mt-6 md:mt-0",
          {
            [`row-span-${s.length}`]: s.length > 1 && hasSameLocation(s),
          }
        )}
      >
        <div className="font-bold">{startTime}</div>
        <div className="hidden md:block h-6 w-0 border border-black"></div>
        <div className="md:hidden w-4 border border-black"></div>
        <div className="font-bold">{endTime}</div>
      </div>
      <div
        className={cn("md:col-span-6 flex gap-2", {
          "flex-col": sessionLocationSame,
        })}
      >
        {s.map((session) => {
          return hasSpeaker(session) && session.status !== "Coming Soon" ? (
            <SpeakerSessionDialog
              key={session.id}
              speaker={sessionSpeaker(session)}
              session={session}
              lang={lang}
              asChild
            >
              <SessionBlock
                session={session}
                speakers={speakers}
                lang={lang}
                className="cursor-pointer"
              />
            </SpeakerSessionDialog>
          ) : (
            <SessionBlock
              key={session.id}
              session={session}
              lang={lang}
              speakers={speakers}
            />
          );
        })}
      </div>
    </>
  );
}
