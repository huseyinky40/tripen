"use client";

import { useRef, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/content/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { messages } from "@/i18n/messages";
import { cn } from "@/lib/utils";

/*
 * Backend YOK. Form, girilen bilgiyi WhatsApp üzerinden iletmek için hazırlar.
 * Sahte "gönderildi" davranışı yok; gönderildiğinde WhatsApp açılır.
 */

type Field = "name" | "company" | "phone" | "email" | "subject" | "message";
type Errors = Partial<Record<Field, string>>;

const fieldClass =
  "mt-2 w-full border-0 border-b-2 border-ink/20 bg-transparent pb-2.5 text-ink placeholder:text-faint focus:border-ink focus:outline-none focus:ring-0";

export function ContactForm() {
  const locale = useLocale();
  const f = messages[locale].contactForm;
  const [errors, setErrors] = useState<Errors>({});
  const [opened, setOpened] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: Record<Field, string>): Errors {
    const errs: Errors = {};
    if (data.name.trim().length < 2) errs.name = f.errName;
    if (data.phone.replace(/[\s()-]/g, "").length < 7) errs.phone = f.errPhone;
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = f.errEmail;
    if (data.message.trim().length < 10) errs.message = f.errMessage;
    return errs;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      company: String(fd.get("company") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      subject: String(fd.get("subject") ?? f.subjects[0]),
      message: String(fd.get("message") ?? ""),
    };

    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      setOpened(false);
      return;
    }

    const lines = [
      f.waIntro,
      "",
      `${f.name}: ${data.name}`,
      data.company ? `${f.company}: ${data.company}` : null,
      `${f.phone}: ${data.phone}`,
      data.email ? `${f.email}: ${data.email}` : null,
      `${f.subject}: ${data.subject}`,
      "",
      data.message,
    ].filter(Boolean);

    const url = `https://wa.me/${site.phone.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setOpened(true);
  }

  const describe = (field: Field) => (errors[field] ? `${field}-error` : undefined);

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      <div>
        <h2 className="display-md text-2xl text-ink">{f.title}</h2>
        <p className="mt-2 text-muted">{f.subtitle}</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-ink">
            {f.name} <span className="text-sand-deep">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className={fieldClass}
            placeholder={f.namePh}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="mt-2 text-sm text-sand-deep">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            {f.company}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={fieldClass}
            placeholder={f.companyPh}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            {f.phone} <span className="text-sand-deep">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={describe("phone")}
            className={fieldClass}
            placeholder={f.phonePh}
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-2 text-sm text-sand-deep">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            {f.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            className={fieldClass}
            placeholder={f.emailPh}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-2 text-sm text-sand-deep">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-ink">
          {f.subject}
        </label>
        <select id="subject" name="subject" className={cn(fieldClass, "appearance-none")}>
          {f.subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {f.message} <span className="text-sand-deep">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={describe("message")}
          className={cn(fieldClass, "resize-y")}
          placeholder={f.messagePh}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-2 text-sm text-sand-deep">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2.5 bg-ink px-7 py-4 text-sm font-medium text-paper transition-colors duration-300 hover:bg-sand-deep"
        >
          <WhatsAppIcon className="h-4 w-4" />
          {f.submit}
        </button>
      </div>

      {opened && (
        <p aria-live="polite" className="text-sm text-muted">
          {f.success}
        </p>
      )}
    </form>
  );
}
