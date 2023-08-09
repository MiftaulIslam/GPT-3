import React from "react";
import ai from "../../assets/Header Illustration.png";
import google from '../../assets/google.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'
import dropbox from '../../assets/dropbox.png'
import atlassian from '../../assets/atlassian.png'

import "./header.css";
const Header = () => {
  return (
    <>
      <div id="home" className="header  section__padding">
        <div className="row">
          <div className="col-lg-5 header_section_text">
            <h2>Let’s Build Something amazing with GPT-3 OpenAI</h2>
            <p>GPT-3 is an advanced AI language model developed by OpenAI. It uses deep learning to generate human-like text, revolutionizing natural language processing tasks</p>
            <div className="header_section_input">
              <input type="email" placeholder="Your Email Address"/>
              <button>Get Started</button>
            </div>
          </div>
          <div className="col-lg-7 header_image">
            <img src={ai} alt="aiimage" />
          </div>
        </div>
      </div>
 <div className="brands section__padding">
<div className="brand_icons">
<div className="icon"><img src={google} alt="google" /></div>
<div className="icon"><img src={slack} alt="slack" /></div>
<div className="icon"><img src={atlassian} alt="atlassian" /></div>
<div className="icon"><img src={shopify} alt="shopify" /></div>
<div className="icon"><img src={dropbox} alt="dropbox" /></div>
</div>
 </div>
    </>
  );
};

export default Header;
