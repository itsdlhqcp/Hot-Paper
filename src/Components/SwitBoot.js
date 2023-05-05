import React, { useState } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';

const LanguageSwitcher1 = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (eventKey) => {
    setLanguage(eventKey);
  };

  return (
    <DropdownButton title={language === 'en' ? 'TRANSLATE TO' : 'Other'} variant="outline-secondary">
      <Dropdown.Item eventKey="en" onSelect={handleLanguageChange}>English</Dropdown.Item>
      <Dropdown.Item eventKey="fr" onSelect={handleLanguageChange}>French</Dropdown.Item>
      <Dropdown.Item eventKey="es" onSelect={handleLanguageChange}>Spanish</Dropdown.Item>
      {/* Add more language options as needed */}
    </DropdownButton>
  );
};

export default LanguageSwitcher1;
