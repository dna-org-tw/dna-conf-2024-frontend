import Image from "next/image";

export default function Sponsor({
  sponsorType,
  sponsors,
}: {
  sponsorType: string;
  sponsors: string[];
}) {
  return (
    <>
      <h2 className="text-2xl	font-bold	text-slate-500">{sponsorType}</h2>
      <div className="flex gap-5 justify-center flex-wrap">
        {sponsors.map((sponsor) => (
          <Image
            className="bg-white border-solid border-2 rounded-md"
            src={`/images/sponsor/${sponsor}`}
            width="150"
            height="150"
            alt="sponsor"
            key={sponsor}
          />
        ))}
      </div>
    </>
  );
}
