import "server-only";

const dictionaries = {
  "en-US": () =>
    import("@/public/locales/en-US/common.json").then(
      (module) => module.default,
    ),
  "zh-TW": () =>
    import("@/public/locales/zh-TW/common.json").then(
      (module) => module.default,
    ),
};

export const getDictionary = async (locale: "en-US" | "zh-TW") =>
  dictionaries[locale]();
