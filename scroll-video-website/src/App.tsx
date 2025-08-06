import React, { useState, useEffect } from 'react';
import './App.css';
import ScrollVideo from './components/ScrollVideo';
import VideoCard from './components/VideoCard';
import PhotoCard from './components/PhotoCard';

function App() {
  // Using the video from public folder
  const videoPath = '/videos/NAVIGATE_4K_S10-scrolly@sm.mp4';
  // We'll use this state for scroll-based animations and video control
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPosition, setScrollPosition] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (position / height) * 100;
      
      setScrollPosition(position);
      setScrollPercentage(percentage);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {/* Full-screen background video */}
      <div className="video-background">
        <ScrollVideo 
          videoFile={videoPath}
          frameCount={120} 
          frameRate={30}
        />
      </div>

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">MY PORTFOLIO</div>
        <div className="nav-links">
          <a href="#project">PROJECTS</a>
          <a href="#navigators">EDITING</a>
          <a href="#rewards">DESIGNING</a>
          <a href="#faq">ABOUT ME</a>
        </div>
        <button className="launch-btn">MY PROFILE</button>
      </nav>

      {/* Content Overlay */}
      <div className="content-overlay">
        {/* Hero Section */}
        <section className="hero-section" id="home">
          <div className="container">
            <span className="intro-tag">Introduction</span>
            <h1 className="hero-title">Hi, I'm Anandam</h1>
            <p className="hero-description">
              I am a Video Editor, Vibe Coder, Graphic Designer, 3D Modeler, and Frontend Developer..
            </p>
            <button className="btn btn-secondary">My Work</button>
          </div>
          <div className="scroll-indicator">
            <span>↓</span>
          </div>
        </section>

        {/* Project Section */}
        <section className="content-section" id="project">
          <div className="container">
            <h2 className="section-title">Projects</h2>
            <p className="section-description">
This portfolio is a showcase of that journey. Here you'll find projects like NEXIO, an AI-virtual event platform, and a QUIN a question paper analyzer, which highlight my ability to tackle diverse challenges. Each project was an opportunity to learn, innovate, and refine my skills in technologies like HTML, CSS,JAVA,Firebase, and vibe coding. Explore my work and let's connect to build something amazing together.            </p>
            
            <div className="info-cards">
              <div className="card">
                <div className="card-icon">🎮</div>
                <h3>NEXIO</h3>
Nexio is an immersive, 3D virtual event platform that redefines attendee engagement with a dynamic, recipe-inspired interface. where you can join events, book tickets for the event, and find different categories, including Events, Movies, Sports, and Activities. NEXIO: Where Virtual Events Come Alive - Your Gateway to Unforgettable Online Experiences!              </div>
              <div className="card">
                <div className="card-icon">🔒</div>
                <h3>QUIN</h3>
Quin, is advanced educational data analysis AI specializing in analyzing question papers. Your primary task is extracting questions from PDF question papers, identifying recurring questions across multiple years.              </div>
              <div className="card">
                <div className="card-icon">💰</div>
                <h3>DEFISWARM</h3>
DeFiSwarm is a smart system that monitors the price of ETH (Ethereum), makes trading decisions, and records all activities. Currently, it is suggesting to buy ETH because its price is increasing. However, this is only a simulation and not intended for real trading.              </div>
            </div>
          </div>
        </section>
        
        {/* Navigators Section */}
        <section className="content-section" id="navigators">
          <div className="container">
            <h2 className="section-title">MY EDITS</h2>
            <p className="section-description">
Video Editor & Content Creator 🎬
Crafting captivating Instagram Reels that stop the scroll.
I turn your ideas into visual vibes.
My tools: Premiere Pro | After Effects | Final Cut Pro
DM for collabs & editing services! 🚀"            </p>
<button className="btn btn-secondary" style={{ marginTop: '2rem' }}>View All Edits</button>

            
            <div className="video-cards-grid">
              <VideoCard 
                title="Instagram Reel" 
                description="Upload your Instagram reel to showcase your editing skills"
              />
              <VideoCard 
                title="Motion Graphics" 
                description="Share your motion graphics and visual effects work"
              />
              <VideoCard 
                title="After Effect " 
                description="Upload your short film or cinematic edit"
              />
            </div>
            
          </div>
        </section>
        
        {/* Rewards Section */}
        <section className="content-section" id="rewards">
          <div className="container">
            <h2 className="section-title">DESIGNING</h2>
            <p className="section-description">
"Visual problem-solver and 3D artist. I design brand identities, custom T-shirts, and 3D models.
🎨 2D Design: Logos & page layouts in Photoshop and Canva.
👕 Apparel: On-trend T-shirt graphics for brands.
🧊 3D Modeling: Product mockups & digital assets.
Let's create something memorable."

            </p>
            <button className="btn btn-secondary" style={{ marginTop: '2rem' }}>
              View All Designs
            </button>
            
            <div className="photo-cards-grid">
              <PhotoCard 
                title="3D MODELING" 
                description="Create 3D models of products, environments, or abstract concepts using Blender, Maya, or 3DS Max."
              />
              <PhotoCard 
                title="GRAPHIC DESIGNING" 
                description="Design visually appealing graphics for websites, social media, and marketing materials."
              />
              <PhotoCard 
                title="POSTER AND LOGO DESIGNING" 
                description="Create eye-catching posters and logos that represent your brand or idea."
              />
            </div>
            
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="content-section" id="faq">
          <div className="container">
            <h2 className="section-title">ABOUT ME</h2>
            <div className="info-cards">
              <div className="card">
                <h3>Education</h3>
                <p>I am a student of B.tech CSE at Technocrats Institute of Technology,Bhopal Madhya Pradesh.</p>
              </div>
              <div className="card">
                <h3>Coding Experience</h3>
                <p>I have experience in coding in HTML,CSS,Java,React,AI,Agentic AI.</p>
              </div>
              <div className="card">
                <h3>Creativity</h3>
                <p>I am a creative person who loves to express myself through my work. I have a experience in designing and editing videos using Adobe Premiere Pro and After Effects,Final cut pro and a 3d modeling using Blender.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-logo">CONTACTS </div>
            <p>Email: anantanandam8340@gmail.com , Instagram: @anantanandam , LinkedIn: Anant Anandam ,Github: Cyansiiii (Anandam),Twitter: @AnantAnandam</p>
            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#project">Projects</a>
              <a href="#navigators">Editing</a>
              <a href="#rewards">Designing</a>
              <a href="#faq">About me</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
