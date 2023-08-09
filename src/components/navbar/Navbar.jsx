import React, { useState } from "react";
import {useSelector } from 'react-redux'
import logo from "../../assets/robodux.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
const Menus = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whatGPT">What is GPT?</a>
    </p>
    <p>
      <a href="#openai">OpenAI</a>
    </p>
    <p>
      <a href="#studies">Case Studies</a>
    </p>
    <p>
      <a href="#blogs">Blogs</a>
    </p>
  </>
);
const SignButtons = ()=>(
  <>
     <button className="btn btn-outline-info btn-lg">Sign In</button>
  </>
)
const Navbar = () => {
  const mode = useSelector(state => state.modetogging.mode)
  const [toggleMenu, settoggleMenu] = useState(false);
  return (
    <>
      <div className="navbar_primary">
        <div className="navbar_primary_links">
          <div className="navbar_primary_links_logo" style={{cursor:'pointer'}} data-text-color={mode}>
            <img src={logo} alt="Artifi" />
            <h4 >Artify</h4>
          </div>
          <div className="navbar_primary_links_menus" data-text-color={mode}>
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#whatGPT">What is GPT?</a>
            </p>
            <p>
              <a href="#openai">OpenAI</a>
            </p>
            <p>
              <a href="#studies">Case Studies</a>
            </p>
            <p>
              <a href="#blogs">Blogs</a>
            </p>
          </div>
        </div>
        <div className="navbar_primary_sign" data-text-color={mode}>
          <button className="btn btn-outline-info btn-lg">Sign In</button>
        </div>
        <div className="navbar_primary_responsive">
          {toggleMenu ? (
            <RiCloseLine color="fff" size={27} onClick={() => { settoggleMenu(false); }} />
          ) : (
            <RiMenu3Line
              color="fff"
              size={27}
              onClick={() => {
                settoggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <div className="navbar_responsive scale-up-center">
              <div className="navbar_primary_links_menus_responsive">
                <Menus/>
              </div>
              <div className="navbar_primary_sign_responsive">
<SignButtons/>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
