/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_section section__padding">
        <div className="footer_section_title">
          <h1>Do you want to step in to the future before others</h1>
          <a href="https://chat.openai.com/">Request Early Access</a>
        </div>
        <div className="footer_section_menus">
          <div className="footer_section_copyright_title">
            <h1>GPT-3</h1>
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className="footer_section_menubar">
            <h4>Links</h4>
                <a href="#home">Home</a>
                <a href="#whatGPT">What is GPT-3</a>
                <a href="#openai">Open AI</a>          
                <a href="#studies">Case_Studies</a>              
                <a href="#blogs">Blogs</a>         
          </div>
        </div>
        <div className="footer_section_copyright text-center">
            <p>© 2021 GPT-3. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
