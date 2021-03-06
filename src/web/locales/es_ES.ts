import {es_ES as baseCoreLocale} from "../../core/locales/es_ES";
import {Locale as CoreLocale} from "../../core/locales/Locale";
import {CoreHelper} from "../../core/utils/CoreHelper";
import {Locale} from "./Locale";

const uiLocale: Omit<Locale, keyof CoreLocale> = {
  "About-builtBy": "Phoenix es desarrollado por",
  "About-title": "Acerca",
  "Common-loadingText": "Cargando...",
};

const coreLocale: Partial<CoreLocale> = {};

CoreHelper.mergeWith(baseCoreLocale, CoreHelper.mergeWith(coreLocale, uiLocale));
