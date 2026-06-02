import { Reveal } from "@/components/ui/Reveal";

export interface ProcessStep {
  title: string;
  body: string;
}

interface ProcessStepsProps {
  steps: ProcessStep[];
}

/** Numaralı, editöryel süreç listesi (tasarım → üretim akışları için). */
export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="border-t border-hairline">
      {steps.map((step, i) => (
        <li key={step.title} className="border-b border-hairline">
          <Reveal delay={i * 60}>
            <div className="grid gap-3 py-9 sm:grid-cols-[5rem_1fr] sm:gap-10 sm:py-11">
              <span aria-hidden className="numeral text-3xl text-sand-deep sm:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink sm:text-2xl">{step.title}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted">{step.body}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
