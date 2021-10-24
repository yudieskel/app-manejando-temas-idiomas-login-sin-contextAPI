import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const initialTheme = "light";
const initialLanguage = "es";
const initialAuth = null;

const translations = {
es: {
    headerTitle: "Mi aplicación sin Context API",
    headerSubtitle: "Mi cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar Sesión",
    buttonLogout: "Cerrar Sesión",
    mainWelcome: "Bienvenido invitado",
    mainHello: "Hola Usuario",
    mainContent: "Mi contenido principal",
    footerTitle: "Mi pié de página"
},
en: {
    headerTitle: "My aplication without Context API",
    headerSubtitle: "My header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome Guest",
    mainHello: "Hello User",
    mainContent: "My main content",
    footerTitle: "My footer"
}
};

const MyPage = () => {

    const [ theme, setTheme ] = useState(initialTheme);
    const [ language, setLanguage ] = useState(initialLanguage);
    const [ text, setText ] = useState(translations[language]);
    const [ auth, setAuth ] = useState(initialAuth);

    const handleTheme = (e) => {
        //console.log("Al hacer click en los radio button nos muestra:", e.target.value);
        if(e.target.value === "light") {
            setTheme("light")
        } else {
            setTheme("dark")
        };
    };

    const handleLanguage = (e) => {
        //console.log("Al hacer click en los selects nos muestra:", e.target.value);
        if(e.target.value === "es") {
            setLanguage("es");
            setText(translations.es);
        } else {
            setLanguage("en");
            setText(translations.en);
        };
    };

    const handleAuth = (e) => {
        if(auth) {
            setAuth(null)
        } else {
            setAuth(true)
        }
    };

    return(
        <div className= "my-page">
            <Header 
            theme={theme} 
            text= {text} 
            auth= {auth}
            handleTheme= {handleTheme} 
            handleLanguage={handleLanguage}  
            handleAuth={handleAuth}
            />
            <Main 
            theme={theme} 
            text= {text}
            auth= {auth}
            />
            <Footer 
            theme={theme} 
            text= {text}
            />
        </div>
    )
};

export default MyPage;