import React from 'react';
import '../index.css'

const LanguageSwitcher = ({ selectedLanguage, onLanguageChange }) => {
  // Define language options
  const languageOptions = [
    { label: 'ENGLISH', value: 'en' },
    { label: 'മലയാളം', value: 'ml' },
    { label: 'हिंदी', value: 'hi' },
    { label: 'Français', value: 'fr' },
  ];

   // Handle language change
   const handleLanguageChange = (event) => {
    onLanguageChange(event.target.value);
  };

  // // Handle language change
  // const handleLanguageChange = (event) => {
  //   const selectedLanguage = event.target.value;
  //   onLanguageChange(selectedLanguage);
  //   localStorage.setItem('selectedLanguage', selectedLanguage);
  // };

  // useEffect(() => {
  //   const storedLanguage = localStorage.getItem('selectedLanguage');
  //   if (storedLanguage) {
  //     onLanguageChange(storedLanguage);
  //   }
  // }, []);

  return (
    <div className="language-switcher">
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
