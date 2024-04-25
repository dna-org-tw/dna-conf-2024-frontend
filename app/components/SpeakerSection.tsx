"use client";

import { ConferenceSpeaker } from "@/lib/notion";
import Carousel from "./Carousel";
import HeaderTitleWithLine from "./HeaderTitleWithLine";
import Speaker from "./speaker";
import { SpeakerSessionDialog } from "./SpeakerSessionDialog";

export default function SpeakerSection({
  title,
  speakers,
}: {
  title: string;
  speakers: ConferenceSpeaker[];
}) {
  return (
    <>
      <HeaderTitleWithLine title={title} lineColor="darkBlue" />
      <Carousel speed={5000}>
        {speakers
          .filter((speaker) => !!speaker.speakerInfo.name)
          .map((speaker) => (
            <div key={speaker.speakerInfo.title}>
              <SpeakerSessionDialog conferenceSpeaker={speaker}>
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
