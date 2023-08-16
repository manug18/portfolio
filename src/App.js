import "./App.css";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useState, useEffect } from "react";
import Header from "../src/components/HeaderSection/Header";
import { splashScreen } from "./data";
import SplashScreen from "../src/containers/splashScreen/SplashScreen";
import { StyleProvider } from "./contexts/StyleContext";
import Greeting from "../src/containers/greeting/Greeting";
import Skills from "../src/containers/skills/Skills";
import Education from "../src/containers/education/Education";
import WorkExperience from "../src/containers/workExperience/WorkExperience";
import StackProgress from "../src/containers/skillProgress/skillProgress";
import ScrollToTopButton from "../src/containers/topbutton/Top";
import Footer from "../src/components/footer/Footer";
import StartupProject from "../src/containers/StartupProjects/StartupProject";
import "../src/App.scss";
import Contact from "./containers/contact/Contact";
function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <StackProgress />
            <Education />
            <StartupProject />
            <WorkExperience />
            <Contact />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
}

export default App;
