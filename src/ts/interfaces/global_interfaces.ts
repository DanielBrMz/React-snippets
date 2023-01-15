
export interface Language {
    headerTitle: string;
    headerSubtitle: string;
    headerLight: string;
    headerDark: string;
    buttonLogin: string;
    buttonLogout: string;
    mainWelcome: string;
    mainHello: string;
    mainContent: string;
    footerTitle: string;

}


export interface TranslatableLanguages {
    [key: string]: Language;
}

export interface IThemeContext {
    theme: string;
    handleTheme:(e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface ILanguageContext {
    language: string;
    texts: Language;
    handleLanguage:(e: React.ChangeEvent<HTMLSelectElement>) => void
}