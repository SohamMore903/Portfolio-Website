import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Category from "./components/Category/Category";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About.jsx";

import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";

import Skills from "./components/Skills/Skills.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Popup from "./components/Popup/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {  
  title: "Collaborative Code Editor",
  date: "* Not deployed",
  title2: "WebSockets, Socket.io",
  title3: "Express.js",
  title4:
    "A real-time code editor that allows multiple people to work on same project simultaneously.",
  bgColor: "#f42c37",
};

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero AboutMe={handleOrderPopup} />
      <About text = "< ABOUT ME />"/>
      <Category text="< PROJECTS />" />
      {/* <Category2 /> */}
      {/* <Services /> */}
      <Banner data={BannerData} />
      <Skills text = "< SKILLS />"/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
      <Contact />
    </div>
  );
};

export default App;
