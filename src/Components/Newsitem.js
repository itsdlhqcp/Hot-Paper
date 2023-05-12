import React, { useState, useEffect, useContext } from "react";
import translate from "translate";
//import context
import { LanguageContext } from './TranslateSwitch'

const Newsitem = (props) => {
  const { title, description, imageUrl, newsUrl, date, key} = props;
  const [showDescription, setShowDescription] = useState(false);
  const [translatedTitle, setTranslatedTitle] = useState("");
  const [translatedDescription, setTranslatedDescription] = useState("");
  //context
  const selectedLanguage = useContext(LanguageContext);

  useEffect(() => {
    console.log(selectedLanguage);
    const translateTitleAndDescription = async () => {
      const [translatedTitle, translatedDescription] = await Promise.all([
        translate(title, { to: selectedLanguage }),
        translate(description, { to: selectedLanguage }),
      ]);
      setTranslatedTitle(translatedTitle);
      setTranslatedDescription(translatedDescription);
    };
    translateTitleAndDescription();
  }, [title, description, selectedLanguage]);

  const handleReadMore = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div key={key} className='my-3'>
      <div className='card' style={{ width: '18rem' }}>
        <img src={imageUrl} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{translatedTitle || title}</h5>
          {showDescription && (
            <p className='card-text'>
              {translatedDescription || description}
            </p>
          )}
          <p className='card-text'>
            <small className='text-muted'>{date}</small>
          </p>
          <button
            className='btn btn-sm btn-dark'
            onClick={handleReadMore}
          >
            {showDescription ? 'Read Less' : 'Read More'}
          </button>
          <a
            rel='noreferrer'
            href={newsUrl}
            target='_blank'
            className='btn btn-sm btn-dark ms-2'
          >
            Read Full Article
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;