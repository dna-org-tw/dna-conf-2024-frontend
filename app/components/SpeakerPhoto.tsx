"use client";

import Image from "next/image";
import { useState } from "react";

// 講者照片來源（Notion 的 photo url）失效時，fallback 到本地佔位圖。
// 注意：佔位圖走 next/image 本地 src，basePath 會自動補上，不要手寫 /2024。
const FALLBACK_SRC = "/images/speaker-placeholder.svg";

export default function SpeakerPhoto({
  src,
  alt,
  width,
  height,
  className,
}: {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const resolvedSrc = !src || failed ? FALLBACK_SRC : src;

  return (
    <Image
      src={resolvedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
