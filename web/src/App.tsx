import Header from "@/custom-components/Header";
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="p-10 flex align-center justify-center">
        <p>{t('story')}</p>
      </div>
    </div>
  );
}

export default App;
