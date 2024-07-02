import Image from "next/image";
import Link from "next/link";

export default function Sponsor({
  sponsorType,
  sponsors,
  isCommunity,
}: {
  sponsorType: string;
  sponsors: { image: string; link: string }[];
  isCommunity?: boolean;
}) {
  return (
    <>
      <h2 className="text-2xl	font-bold	text-slate-500">{sponsorType}</h2>
      <div className="flex gap-5 justify-center flex-wrap">
        {sponsors.map((sponsor) => (
          <>
            {sponsor.link !== "#" ? (
              <Link
                key={sponsor.link}
                href={sponsor.link}
                target="_blank"
                className="flex bg-white border-solid border-2 rounded-md"
              >
                <Image
                  src={`/images/sponsor/${sponsor.image}`}
                  className="p-4"
                  width={isCommunity ? "100" : "150"}
                  height={isCommunity ? "100" : "150"}
                  alt="sponsor"
                />
              </Link>
            ) : (
              <Image
                src={`/images/sponsor/${sponsor.image}`}
                className="flex bg-white border-solid border-2 rounded-md p-4"
                width={isCommunity ? "100" : "150"}
                height={isCommunity ? "100" : "150"}
                alt="sponsor"
              />
            )}
          </>
        ))}
      </div>
    </>
  );
}
