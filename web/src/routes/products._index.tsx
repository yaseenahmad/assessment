import Header from '@/custom-components/Header';
import { Link } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function Products() {
  const { t } = useTranslation();
  
  const products = [
    { id: 1, name: t('products.product1'), description: t('products.product1Desc') },
    { id: 2, name: t('products.product2'), description: t('products.product2Desc') },
    { id: 3, name: t('products.product3'), description: t('products.product3Desc') },
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">{t('products.title')}</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="block p-6 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
