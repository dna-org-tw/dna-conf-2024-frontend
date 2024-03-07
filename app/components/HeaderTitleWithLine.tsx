import React from "react"

type LineColor = "yellow" | "blue" | "darkBlue" | "cyan" | "pink" | "orange" | "green" | "red" | "BrightPink"

type Props = {
  title: string
  lineColor: LineColor
}

const lineColors: Record<LineColor, string> = {
  yellow: "border-[#FFD028]",
  blue: "border-[#0066FF]",
  darkBlue: "border-[#004E9D]",
  cyan: "border-[#00E0FF]",
  pink: "border-[#F9D2E5]",
  orange: "border-[#E74310]",
  green: "border-[#00993E]",
  red: "border-[#E4003D]",
  BrightPink: "border-[#C54090]",
}

const HeaderTitleWithLine = ({ title, lineColor }: Props) => {
  return (
    <div className="flex justify-center items-center max-w-[500px] mx-auto">
      <div className={`border-[2px] flex-1 ${lineColors[lineColor]} `}></div>
      <h1 className="lg:mx-2 mx-0 lg:whitespace-nowrap text-[32px] flex-2 text-black text-center">{title}</h1>
      <div className={`border-[2px] flex-1 ${lineColors[lineColor]} `}></div>
    </div>
  )
}

export default HeaderTitleWithLine
