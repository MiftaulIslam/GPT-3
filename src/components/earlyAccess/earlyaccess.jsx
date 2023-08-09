import React from 'react'
import './earlyaccess.css'
import accessImage from '../../assets/Feature Image.png'
const Earlyaccess = () => {
  return (
    <>
      <div id='openai' className="earlyaccess_section section__padding">
        <div className="earlyaccess_section_contents">
            <div className="earlyaccess_section_contents_image">
                <img src={accessImage} alt="featurePhoto" />
            </div>
            <div className="earlyaccess_section_contents_content">
                <p>Log In with OpenAI to Get Started</p>
                <h2>The possibilities are beyond your imagination</h2>
                <p>GPT-3's potential exceeds imagination, revolutionizing language AI. Its 175 billion parameters empower creativity, problem-solving, and innovation across industries, unlocking new horizons</p>
                <a href='https://chat.openai.com/'>Get Started</a>
            </div>
        </div>

      </div>
    </>
  )
}

export default Earlyaccess
