import { PageHeader } from "@/components/sections/PageHeader";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getT } from "@/i18n/server";

type LegalKey = "kvkk" | "privacy" | "cookies";

/** Yasal metinler için paylaşılan düzen (KVKK / gizlilik / çerez). */
export async function LegalPage({ docKey }: { docKey: LegalKey }) {
  const { t } = await getT();
  const L = t.legal;
  const doc = L[docKey];

  return (
    <>
      <PageHeader eyebrow={L.eyebrow} title={doc.title} lead={doc.lead}>
        <p className="mt-6 text-sm text-muted">
          {L.updated}: {L.updatedValue}
        </p>
      </PageHeader>

      <Section>
        <Container size="narrow">
          <div className="prose-tripen">
            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
