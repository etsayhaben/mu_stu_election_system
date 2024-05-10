import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSSFolder/homepage.css';
import Header from './Header';
import Footer from './Footer';

function Homepage() {
  return (
    <div className="member-of-parliament-page">
      <Header />
      <div className="content">
        <h1>Welcome to the Mekelle University Student Union Online Election Platform!</h1>
        <div className="announcement">
          <h2>Election Announcement</h2>
          <p>The upcoming student union election is scheduled for thursday at 9:00 am- 12:00 am</p>
        </div>
        <div className="body-content">
          <Article
            title="Why Should I Vote?"
            content="Voting in the student union election is your opportunity to have a say in the direction of Mekelle University. Your vote matters and helps shape the future of our campus community."
          />
          <Article
            title="The Importance of Student Union"
            content="The student union represents the collective voice of Mekelle University students. It plays a vital role in advocating for student rights, organizing events, and fostering a sense of belonging on campus."
          />
          <Article
            title="How to Participate"
            content="To participate in the student union election, make sure you are registered as a student at Mekelle University. Stay tuned for announcements regarding candidate nominations, voting procedures, and election dates."
          />
          <div className="candidate-profiles">
            <h2>Candidate Profiles</h2>
            <p>Get to know the candidates running for student union positions:</p>
            {/* Add candidate profiles here */}
          </div>
          <div className="election-guidelines">
            <h2>Election Guidelines</h2>
            <p>Review the election guidelines and rules to ensure a fair and transparent election process:</p>
            {/* Add election guidelines here */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Article({ title, content }) {
  return (
    <div className="article">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Homepage;
