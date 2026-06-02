import type { Locale } from "../config";
import { en } from "./en";
import { ru } from "./ru";
import { tr } from "./tr";

/** Mesaj tipi Türkçe katalogdan türetilir; en/ru bu tipe uymak zorundadır. */
export type Messages = typeof tr;

export const messages: Record<Locale, Messages> = { tr, en, ru };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}
