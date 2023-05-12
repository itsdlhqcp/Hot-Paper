import React, { useState } from 'react';
import '../index.css'
//exporting l;anguage context
export const LanguageContext = React.createContext();

const LanguageSwitcherx = () => {
  
  const [language, setLanguage] = useState('en');
  const languageOptions = [
    { label: 'ENGLISH', value: 'en' },
    { label: 'മലയാളം', value: 'ml' },
    { label: 'हिंदी', value: 'hi' },
    { label: 'Français', value: 'fr' },
  ];

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log(setLanguage)
  };
console.log(language)
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);

  const toggleLanguageSwitcher = () => {
    setShowLanguageSwitcher(!showLanguageSwitcher);
  };

  return (
    //value assigned for context
    <LanguageContext.Provider value={language}>
    <div className="language-switcher">
      {showLanguageSwitcher ? (
        <div>
          <select value={language} onChange={handleLanguageChange}>
            {languageOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button onClick={toggleLanguageSwitcher}>𝓁𝑔</button>
        </div>
      ) : (
        <button onClick={toggleLanguageSwitcher}>诶𝒜</button>
      )}
    </div>
    </LanguageContext.Provider>
  );
};

export default LanguageSwitcherx;