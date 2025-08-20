import Header from "@/custom-components/Header";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">{t('home.title')}</h1>
        <p className="text-lg text-gray-600 mb-8">{t('home.subtitle')}</p>
        
        <div className="grid gap-4 md:grid-cols-2">
          <Link 
            to="/products" 
            className="block p-6 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <h2 className="text-xl font-semibold text-blue-800 mb-2">{t('home.viewProducts')}</h2>
            <p className="text-blue-600">{t('home.viewProductsDesc')}</p>
          </Link>
          
          <Link 
            to="/about" 
            className="block p-6 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
          >
            <h2 className="text-xl font-semibold text-green-800 mb-2">{t('home.aboutUs')}</h2>
            <p className="text-green-600">{t('home.aboutUsDesc')}</p>
          </Link>
        </div>
      </main>
    </>
  );
}

export function meta() {
  return [
    { title: 'Home Page' },
    {
      name: 'description',
      content: 'Welcome to our application homepage',
    },
  ];
}