import React from "react"

type Props = {
  title: string
  lineColor: string
}

const HeaderTitleWithLine = ({ title, lineColor }: Props) => {
  const lineColors: { [key: string]: string } = {
    yellow: "bg-[#FFD028]",
    blue: "bg-[#0066FF]",
    darkBlue: "bg-[#004E9D]",
    cyan: "bg-[#00E0FF]",
    pink: "bg-[#F9D2E5]",
    orange: "bg-[#E74310]",
    green: "bg-[#00993E]",
    red: "bg-[#E4003D]",
    BrightPink: "bg-[#C54090]",
  }
  return (
    <div className="flex items-center max-w-[500px] mx-auto">
      <div className={`flex-grow h-1 ${lineColors[lineColor]}`}></div>
      <h1 className="mx-6 text-[32px] text-[#000000] max-w-[calc(100%-5rem)] text-center">{title}</h1>
      <div className={`flex-grow h-1 ${lineColors[lineColor]}`}></div>
    </div>
  )
}

export default HeaderTitleWithLine
