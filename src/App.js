import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skill";
import Work from "./components/Works/work";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Myskill from "./components/MySkills/myskill";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Myskill/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
