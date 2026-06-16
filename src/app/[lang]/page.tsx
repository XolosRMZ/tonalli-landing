import LandingContent from "@/components/LandingContent";
import { copy, type Language } from "@/lib/copy";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Language }>;
}) {
  const { lang } = await params;
  const strings = copy[lang] ?? copy.es;

  return <LandingContent strings={strings} lang={lang} />;
}
