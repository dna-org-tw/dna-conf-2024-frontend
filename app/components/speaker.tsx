import Image from "next/image";
import clsx from "clsx";

function Speaker() {
  return (
    <section>
      <div className={clsx("flex flex-col", "md:flex-row")}>
        <Image
          src="/images/osera-ryo.png"
          alt="大瀬良 亮 幹事"
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
            大瀬良 亮
            <span className={clsx("text-[20px] ml-3", "md:text-[16px]")}>
              幹事
            </span>
          </div>
          <div className={clsx("font-light text-[20px]")}>OSERA Ryo</div>
        </div>
      </div>
    </section>
  );
}

export default Speaker;
