import Header from '@/custom-components/Header';
import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function ProductDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="mb-6">
          <Link to="/products" className="text-blue-600 hover:text-blue-800">
            ← {t('navigation.backToProducts')}
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-4">{t(`products.product${id}`)}</h1>
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-gray-600 mb-4">{t('products.detailsFor')} {id}</p>
          <p className="text-sm text-gray-500">{t('products.sampleDescription')}</p>
        </div>
      </main>
    </div>
  );
}
