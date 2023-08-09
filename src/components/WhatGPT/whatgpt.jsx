import React from "react";
import "./whatgpt.css";
const Whatgpt = () => {
  return (
    <>
      <div id="whatGPT" className="what_is_gpt section__padding">
        <div className="row what_is_gpt_section ">
          <div className="col-lg-4 what_is_gpt_section_title">
            <h3>What is GPT-3</h3>
          </div>
          <div className="col-lg-8 what_is_gpt_section_description">
            <p>GPT-3, or Generative Pre-trained Transformer 3, is a state-of-the-art language processing AI model. With 175 billion parameters, it can understand and generate human-like text, revolutionizing various applications like chatbots, content creation, and more by comprehending context and producing contextually relevant responses
            </p>
          </div>
          <div className="what_is_gpt_section_center_content">
            <h2>The possibilities are beyond your imagination</h2>
            <p>Explore The Library</p>
          </div>
          <div className="what_is_gpt_section_sectors">
            <div className="sector">
              <h3>Chatbots</h3>
              <p>GPT-3 chatbot: AI-powered tool utilizing advanced language processing for natural conversations, offering solutions across various industries efficiently</p>
            </div>
            <div className="sector">
              <h3>Knowledgebase</h3>
              <p>GPT-3 knowledgebase: Utilizes vast data to provide comprehensive and accurate information, transforming the way we access and share knowledge</p>
            </div>
            <div className="sector">
              <h3>Education</h3>
              <p>Students leverage GPT-3 for education by generating insights, drafting essays, answering queries, and simulating discussions, enhancing learning experiences</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whatgpt;
