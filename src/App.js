
import { useEffect} from "react";
import {useSelector } from 'react-redux'
import { Navbar,Blog,Earlyaccess,Header,Whatgpt,Feature,Footer } from "./content";
import "./App.css";

function App() {
  const mode = useSelector(state => state.modetogging.mode)
  useEffect(() => {
    document.body.setAttribute('data-bd-mode',mode)
  }, [mode]);
  return (
    <>
      <div className={`main ${mode==="dark"?"gradient__bg":"gradient_light_bg"}`}>
        <Navbar />
       
        <Header/>
      </div>
      <Whatgpt/>
      <Feature/>
      <Earlyaccess/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
