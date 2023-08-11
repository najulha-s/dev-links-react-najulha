import { useState } from "react";
import Profile from "../components/profile/profile";
import Switch from "../components/switch/switch";
import Links from "../components/links/link";

import "./App.css";

import imgDarkMode from "../img/avatar.jpg";
import imgLightMode from "../img/pink.webp";


const App= () => {
  const [isLightMode,setIsLightMode] = useState(false);

const imgSrc= isLightMode ? imgLightMode : imgDarkMode
  const imgAlt = isLightMode ? "Imagem no modo claro" : "Imagem no modo escuro"
return (
  <div id="container">
    <Profile imgSrc={imgSrc} imgAlt={imgAlt}>@najulha</Profile>
    <Switch></Switch>
  <div id="links">
    <ul>
      <Links link={"https://github.com"}>GitHub</Links>
      <Links link={"#"}>Instagram</Links>
      <Links link={"#"}>Portifólios</Links>
      <Links link={"#"}>Projetos</Links>

    </ul>
  </div>
  </div>
);

};

export default App;