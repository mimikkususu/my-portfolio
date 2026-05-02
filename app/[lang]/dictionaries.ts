const dictionaries: any = {
    en: () => import('../../dictionaries/en.json').then((module) => module.default),
    jp: () => import('../../dictionaries/jp.json').then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()