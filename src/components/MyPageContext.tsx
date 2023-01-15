import React, {useState} from 'react'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'
import FooterContext from './FooterContext'
import { Language, TranslatableLanguages } from '../ts/interfaces/global_interfaces';
import {ThemeProvider} from '../context/ThemeContext';
import { LanguageProvider } from '../context/LanguageContext';


const initalAuth: boolean = false;


const MyPage = (): JSX.Element => {
    const [auth, setAuth] = useState<boolean>(initalAuth)

    const handleAuth = (): void => {
        setAuth(!auth);
    }

  return (
    <div className='my-page'>
        <ThemeProvider>
            <LanguageProvider>
                <HeaderContext auth={auth} handleAuth={handleAuth}/>
                <MainContext auth={auth}/>
                <FooterContext/> 
            </LanguageProvider>
        </ThemeProvider>   
    </div>
  )
}

export default MyPage;