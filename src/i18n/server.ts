import "server-only";
import { getLocale } from "./getLocale";
import { getMessages, type Messages } from "./messages";
import type { Locale } from "./config";

/** Sunucu bileşenleri için: aktif locale + mesajlar. */
export async function getT(): Promise<{ locale: Locale; t: Messages }> {
  const locale = await getLocale();
  return { locale, t: getMessages(locale) };
}
