import Sentence from './containers';
import i18n from "./i18n";
import { FlagIcon } from "react-flag-kit";
import { useTranslation } from "react-i18next";

function App() {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const { t } = useTranslation();

  return (
    <div className='container'>
      <div className="languages">
        <button
          className="languages__button"
          onClick={() => {
            changeLanguage("en");
          }}
        >
          <FlagIcon code="GB" size={48} />
        </button>
        <button
          className="languages__button"
          onClick={() => {
            changeLanguage("cz");
          }}
        >
          <FlagIcon code="CZ" size={48} />
        </button>
        <button
          className="languages__button"
          onClick={() => {
            changeLanguage("pl");
          }}
        >
          <FlagIcon code="PL" size={48} />
        </button>
      </div>
      <div className='main center'>
        <h1>{t("title")}</h1>
        <Sentence />
      </div>
    </div>
  );
}

export default App;
