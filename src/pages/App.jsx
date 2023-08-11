import { useState } from "react";
import Profile from "../components/profile/profile";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/pink.webp";


const App= () => {
  const [isLightMode,setIsLightMode] = useState(false);

const imgSrc= isLightMode ? imgLightMode : imgDarkMode
  const imgAlt = isLightMode ? "Imagem no modo claro" : "Imagem no modo escuro"
return (
  <div>
    <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@najulha</Profile>
  </div>
);

};

export default App;