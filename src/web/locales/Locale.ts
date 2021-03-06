import {LocaleParams as CoreLocaleParams} from "../../core/locales/Locale";

export type LocaleParams = CoreLocaleParams & {
  "About-builtBy": {};
  "About-title": {};
  "Common-loadingText": {};
};

export type LocaleKey = keyof LocaleParams;

export type Locale = Record<LocaleKey, string> & {
  code: string;
};
