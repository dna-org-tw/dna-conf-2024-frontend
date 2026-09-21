import React from "react";

type LineColor =
  | "yellow"
  | "blue"
  | "darkBlue"
  | "cyan"
  | "pink"
  | "orange"
  | "green"
  | "red"
  | "brightPink";

type Props = {
  title: string;
  lineColor: LineColor;
};

const lineColors: Record<LineColor, string> = {
  yellow: "border-[#FFD028]",
  blue: "border-[#0066FF]",
  darkBlue: "border-[#004E9D]",
  cyan: "border-[#108BD9]",
  pink: "border-[#F9D2E5]",
  orange: "border-[#E74310]",
  green: "border-[#00993E]",
  red: "border-[#E4003D]",
  brightPink: "border-[#C54090]",
};

const HeaderTitleWithLine = ({ title, lineColor }: Props) => {
  return (
    <div className="flex justify-center items-center mx-auto mb-5 md:mb-10 lg:gap-x-8 gap-x-4">
      <div
        className={`border-[2px] w-full md:w-[120px] ${lineColors[lineColor]}`}
      ></div>

      <h1 className="lg:mx-2 mx-0 min-w-[220px] lg:whitespace-nowrap text-2xl md:text-4xl text-black text-center font-bold">
        {title}
      </h1>

      <div
        className={`border-[2px] w-full md:w-[120px] ${lineColors[lineColor]} `}
      ></div>
    </div>
  );
};

export default HeaderTitleWithLine;
