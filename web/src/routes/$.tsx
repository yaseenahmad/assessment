import Header from "@/custom-components/Header";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4 text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">{t('common.notFound')}</p>
        <Link 
          to="/" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t('common.goHome')}
        </Link>
      </main>
    </div>
  );
}