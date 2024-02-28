import 'server-only'
 
const dictionaries = {
  'en-US': () => import('./locales/en-US.json').then((module) => module.default),
  'zh-TW': () => import('./locales/zh-TW.json').then((module) => module.default),
}
 
export const getDictionary = async (locale: 'en-US' | 'zh-TW') => dictionaries[locale]()