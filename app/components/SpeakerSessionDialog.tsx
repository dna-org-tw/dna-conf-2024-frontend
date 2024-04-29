import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ConferenceSpeaker } from "@/lib/notion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Lang } from "@/types/common";

export function SpeakerSessionDialog({
  conferenceSpeaker,
  lang,
  color = "#00993E",
  children,
}: {
  conferenceSpeaker?: ConferenceSpeaker;
  lang: Lang;
  color?: string;
  children: React.ReactNode;
}) {
  const { speakerInfo, session } = conferenceSpeaker || {};

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="md:max-w-[720px] max-h-[80vh] md:max-h-initial overflow-y-auto">
        <div
          className="flex flex-col md:flex-row pb-6 border-b-2 gap-4"
          style={{ borderColor: color }}
        >
          <div className="flex-none flex justify-center items-start">
            {speakerInfo?.photo && (
              <Image
                src={speakerInfo.photo}
                alt={speakerInfo.name}
                width={178}
                height={178}
                className="object-contain"
              />
            )}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{speakerInfo?.title}</h2>
            <h2 className="text-2xl font-bold">{speakerInfo?.name}</h2>
            <div>{speakerInfo?.bio[lang]}</div>
            <div className="flex gap-3">
              {speakerInfo?.socialMedia?.facebook && (
                <Link href={speakerInfo.socialMedia?.facebook} target="_blank">
                  <Image
                    src="/images/speaker/facebook.svg"
                    alt="facebook"
                    width={24}
                    height={24}
                  />
                </Link>
              )}
              {speakerInfo?.socialMedia?.instagram && (
                <Link href={speakerInfo.socialMedia?.instagram} target="_blank">
                  <Image
                    src="/images/speaker/instagram.svg"
                    alt="instagram"
                    width={24}
                    height={24}
                  />
                </Link>
              )}
              {speakerInfo?.socialMedia?.website && (
                <Link href={speakerInfo.socialMedia?.website} target="_blank">
                  <Image
                    src="/images/speaker/mail.svg"
                    alt="website"
                    width={24}
                    height={24}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-x-3">
              <Image
                src="/images/imgs_notice.png"
                alt="session info"
                width={24}
                height={24}
              />
              <h2 className="text-2xl font-bold" style={{ color: color }}>
                議程資訊
              </h2>
            </div>
            <div className="flex items-center gap-x-3" style={{ color: color }}>
              <span>{session?.room}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold">{session?.title[lang]}</h3>
          <div>{session?.description[lang]}</div>
          <div className="flex gap-2" style={{ color: color }}>
            {session?.hashTags[lang]?.map((tag) => (
              <Badge className={cn("font-normal tracking-wide")}>#{tag}</Badge>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
