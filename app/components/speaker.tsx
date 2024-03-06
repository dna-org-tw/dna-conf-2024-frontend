import Image from "next/image";
import clsx from "clsx";

interface IProps {
  name?: string;
  nameEN?: string;
  title?: string;
  imgSrc?: string;
}

function Speaker(props: IProps) {
  const { name = "", nameEN = "", title = "", imgSrc = "" } = props;
  return (
    <section className="flex justify-center w-full">
      <div className={clsx("flex flex-col", "md:flex-row")}>
        <Image
          src={imgSrc}
          alt={`${name} ${title}`}
          width={328}
          height={371}
          className="w-full max-w-[328px]"
        />
        <div
          className={clsx(
            "mt-[30px] flex flex-col justify-center text-center text-[#004E9D]",
            "md:w-[328px] md:flex md:flex-col md:justify-center md:text-end"
          )}
        >
          <div
            className={clsx(
              "text-[#004E9D] font-bold text-[20px]",
              "md:text-[36px]"
            )}
          >
            {name}
            <span className={clsx("text-[20px] ml-3", "md:text-[16px]")}>
              {title}
            </span>
          </div>
          <div className={clsx("font-light text-[20px]")}>{nameEN}</div>
        </div>
      </div>
    </section>
  );
}

export default Speaker;
