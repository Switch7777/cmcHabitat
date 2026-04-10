import { createContext, useContext, useState } from "react";

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState("fr");

  const switchLang = (newLang) => {
    if (newLang === "fr" || newLang === "en") {
      setLang(newLang);
    }
  };

  return (
    <LangContext.Provider value={{ lang, switchLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang() doit être utilisé à l'intérieur de <LangProvider>");
  }
  return ctx;
}
