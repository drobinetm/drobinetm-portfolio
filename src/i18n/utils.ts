import en from './en.json';
import es from './es.json';

type TranslationKey = keyof typeof en;

type NestedKeyOf<T extends object> = {
  [K in keyof T]: T[K] extends object
    ? `${K & string}.${keyof T[K] & string}`
    : K & string;
}[keyof T];

type FlatKey = NestedKeyOf<typeof en>;

const translations: Record<string, Record<string, Record<string, string>>> = { en, es };

export function useTranslations(lang: string) {
  const locale = lang in translations ? lang : 'en';
  const dict = translations[locale] as Record<string, Record<string, string>>;
  const fallback = translations['en'] as Record<string, Record<string, string>>;

  return function t(key: FlatKey): string {
    const [section, ...rest] = key.split('.');
    const leafKey = rest.join('.');
    return dict?.[section]?.[leafKey] ?? fallback?.[section]?.[leafKey] ?? key;
  };
}
