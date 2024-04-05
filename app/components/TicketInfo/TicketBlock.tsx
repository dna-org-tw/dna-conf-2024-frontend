import { TFunction } from "i18next";
import { TicketType, ticketType } from "./index";

export default async function TicketBlock({
  type,
  t,
  color,
  title,
  price,
  availablePeriod,
  originalPrice,
  content,
  label,
}: {
  type: TicketType;
  t: TFunction;
  color: string[];
  price: string;
  availablePeriod: string;
  originalPrice: string;
  title: string;
  content: string[];
  label?: string;
}) {
  return (
    <div
      className={`flex-1 mx-1 xl:mx-3 rounded-2xl border-4 ${color[1]} flex flex-col relative`}
    >
      {label && (
        <div
          className="absolute top-[-70px] left-[-10px] w-[250px] h-[73px] bg-no-repeat bg-contain text-white text-2xl font-bold pt-[5px] pl-[48px] pr-[10px] flex justify-center items-center uppercase tracking-[-1px]"
          style={{ backgroundImage: "url(/images/ticket-label.svg)" }}
        >
          {label}
        </div>
      )}

      <div
        className={`flex justify-center ${color[0]} text-center flex-col py-2 min-h-[150px]`}
      >
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        {type !== ticketType.singleClassic && (
          <h3 className="text-4xl font-bold text-[#E4003D] uppercase">
            {price}
          </h3>
        )}
      </div>
      <div className="p-4 bg-[#F6F6F6] rounded-b-xl flex-1">
        {type !== ticketType.singleClassic ? (
          <>
            <p className="font-bold">{availablePeriod}</p>
            <p className="font-bold uppercase">{`${t("original price")} ${originalPrice}`}</p>
          </>
        ) : (
          <p className="font-bold">{t("coming soon")}</p>
        )}
        <p className="mt-4">{t("ticket content")}</p>
        <ul className="list-disc ml-6">
          {content.map((item) => (
            <li className="whitespace-pre-wrap mb-2" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
