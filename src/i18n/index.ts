import i18next from 'i18next'

import type { Lang } from '@/types'

import { initReactI18next } from 'react-i18next'

import { EN_US, ZH_CN } from '@/locales'

export const resources = {
  en_US: EN_US,
  zh_CN: ZH_CN
}

const ns = ['Global', 'Auth'] as const

i18next
  .use(initReactI18next)
  .init({
    lng: 'en',
    debug: true,
    ns,
    defaultNS: 'Global',
    resources
  })
  .then(function (t) {
    t('key')
  })

export const changeLanguage = async (lang: Lang) => {
  await i18next.changeLanguage(lang)
}

export default i18next
