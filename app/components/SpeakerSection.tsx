"use client";

import { Session, Speaker as SpeakerInfo } from "@/lib/notion";
import Carousel from "./Carousel";
import HeaderTitleWithLine from "./HeaderTitleWithLine";
import Speaker from "./speaker";
import { SpeakerSessionDialog } from "./SpeakerSessionDialog";
import { Lang } from "@/types/common";

export default function SpeakerSection({
  title,
  speakers,
  sessions,
  lang,
}: {
  title: string;
  speakers: SpeakerInfo[];
  sessions: Session[];
  lang: Lang;
}) {
  return (
    <>
      <HeaderTitleWithLine title={title} lineColor="darkBlue" />
      <Carousel speed={5000}>
        {speakers
          .filter((speaker) => !!speaker.name)
          .map((speaker, i) => (
            <div key={`${speaker.title}-${i}}`} className="flex justify-center">
              <SpeakerSessionDialog
                speaker={speaker}
                lang={lang}
                session={sessions.find((s) =>
                  s.speakerIDs.includes(speaker.id)
                )}
              >
                <Speaker
                  name={speaker.title}
                  nameEN={speaker.name}
                  title=""
                  imgSrc={speaker.photo}
                />
              </SpeakerSessionDialog>
            </div>
          ))}
      </Carousel>
    </>
  );
}
