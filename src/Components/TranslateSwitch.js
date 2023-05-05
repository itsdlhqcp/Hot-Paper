import React, { useState } from 'react';
import '../index.css'

export const LanguageContext = React.createContext();
console.log(LanguageContext.message)

const LanguageSwitcherx = () => {
  // Initialize state to English
  
  const [language, setLanguage] = useState('en');
  // Define language options
  const languageOptions = [
    { label: 'ENGLISH', value: 'en' },
    { label: 'മലയാളം', value: 'ml' },
    { label: 'हिंदी', value: 'hi' },
    { label: 'Français', value: 'fr' },
  ];

  // Handle language change
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
