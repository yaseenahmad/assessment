import Header from "@/custom-components/Header";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n/i18n";


export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">{t('home.heading')}</h1>
        <p className="mt-4">{t('home.description')}</p>
      </main>
    </>
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