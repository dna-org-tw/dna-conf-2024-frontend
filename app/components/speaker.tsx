import Image from "next/image";
import clsx from "clsx";

interface IProps {
  name?: string;
  nameEN?: string;
  title?: string;
  imgSrc?: string;
}

function Speaker({ name = "", nameEN = "", title = "", imgSrc = "" }: IProps) {
  return (
    <section className="flex justify-center items-center w-full">
      <div className={clsx("flex flex-col")}>
        {imgSrc && (
          <div className="w-[180px] h-[180px] flex justify-center items-center">
            <Image
              src={imgSrc}
              alt={`speaker ${name} ${title}`}
              width={180}
              height={180}
              className="h-full w-auto"
            />
          </div>
        )}
        <div
          className={clsx(
            "mt-[30px] flex flex-col justify-center text-center text-nowrap text-[#004E9D]",
            "md:flex md:flex-col md:justify-center "
          )}
        >
          <div className={clsx("text-[#004E9D] font-bold text-2xl md:text-xl")}>
            {name}
          </div>
          <div className={clsx("font-light text-base")}>{nameEN}</div>
        </div>
      </div>
    </section>
  );
}

export default Speaker;
