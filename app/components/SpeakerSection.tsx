"use client";

import { ConferenceSpeaker } from "@/lib/notion";
import Carousel from "./Carousel";
import HeaderTitleWithLine from "./HeaderTitleWithLine";
import Speaker from "./speaker";
import { SpeakerSessionDialog } from "./SpeakerSessionDialog";
import { Lang } from "@/types/common";

export default function SpeakerSection({
  title,
  speakers,
  lang,
}: {
  title: string;
  speakers: ConferenceSpeaker[];
  lang: Lang;
}) {
  return (
    <>
      <HeaderTitleWithLine title={title} lineColor="darkBlue" />
      <Carousel speed={5000}>
        {speakers
          .filter((speaker) => !!speaker.speakerInfo.name)
          .map((speaker, i) => (
            <div key={`${speaker.speakerInfo.title}-${i}}`} className="flex justify-center">
              <SpeakerSessionDialog conferenceSpeaker={speaker} lang={lang}>
                <Speaker
                  name={speaker.speakerInfo.title}
                  nameEN={speaker.speakerInfo.name}
                  title=""
                  imgSrc={speaker.speakerInfo.photo}
                />
              </SpeakerSessionDialog>
            </div>
          ))}
      </Carousel>
    </>
  );
}
