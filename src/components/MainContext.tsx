import React, { useContext } from 'react'
import { Language } from '../ts/interfaces/global_interfaces'
import ThemeContext from '../context/ThemeContext';
import LanguageContext from '../context/LanguageContext';

const MainContext = ({auth}: {auth: boolean}): JSX.Element => {
  const {texts} = useContext(LanguageContext); 
  const {theme} = useContext(ThemeContext);
  const {mainWelcome, mainHello, mainContent} = texts;

  return (
    <main className={theme}>
        {auth?<p>{mainHello}</p>:<p>{mainContent}</p>}
        <p>{mainWelcome}</p>
    </main>
  )
}

export default MainContext;