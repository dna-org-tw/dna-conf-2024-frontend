"use client";

import { useClientTranslation } from "@/i18n/client";
import { TFunction } from "i18next";
import React, { ReactNode } from "react";

type i18nTranslateContextType = {
  translate?: TFunction<string, undefined>;
  lng: string;
};

export const i18nTranslateContext =
  React.createContext<i18nTranslateContextType>({
    translate: undefined,
    lng: "zh-TW",
  });

const I18nTranslateProvider = ({
  children,
  lng,
}: {
  children: ReactNode;
  lng: string;
}) => {
  const { t } = useClientTranslation(lng ?? "zh-TW");
  return (
    <i18nTranslateContext.Provider value={{ translate: t, lng: lng }}>
      {children}
    </i18nTranslateContext.Provider>
  );
};

export default I18nTranslateProvider;
