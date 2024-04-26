import Image from "next/image";
import clsx from "clsx";
import { Session } from "@/lib/notion";

interface IProps {
  name?: string;
  nameEN?: string;
  title?: string;
  imgSrc?: string;
}

function Speaker({ name = "", nameEN = "", title = "", imgSrc = "" }: IProps) {
  return (
    <section className="flex justify-center items-center w-full ml-5">
      <div className={clsx("flex flex-col")}>
        {imgSrc && <Image
          src={imgSrc}
          alt={`speaker ${name} ${title}`}
          width={493}
          height={468}
          className="w-full max-w-[270px]"
        />}
        <div
          className={clsx(
            "mt-[30px] flex flex-col justify-center text-center text-nowrap text-[#004E9D]",
            "md:flex md:flex-col md:justify-center "
          )}
        >
          <div className={clsx("text-[#004E9D] font-bold text-2xl md:text-xl")}>
            {name}
            <span className={clsx("text-2xl ml-3 md:text-base")}>{title}</span>
          </div>
          <div className={clsx("font-light text-base")}>{nameEN}</div>
        </div>
      </div>
    </section>
  );
}

export default Speaker;
