import Header from "@/custom-components/Header";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";


export default function About() {
  const { t } = useTranslation()

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">{t('about.heading')}</h1>
        <p className="mt-4">{t('about.description')}</p>
      </main>
    </div>
  );
}

export function meta() {
  const { t } = i18n

  return [
    { title: t('home.meta.title') },
    {
      name: 'description',
      content: t('home.meta.description'),
    },
  ];
}