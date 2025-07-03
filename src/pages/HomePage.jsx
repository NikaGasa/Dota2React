import React from "react";
import "src/styles/HomePage.scss";

const HomePage = () => {
  return (
    <div className="main-container">
      <div className="main-bg"></div>
      <div className="main-content">
        <div class="overlay">
          <div class="content">
            <h1>
              “A MODERN MULTIPLAYER <br /> MASTERPIECE.”
            </h1>
            <p class="quote-author">- DESTRUCTOID</p>
            <a href="https://www.dota2.com/home" class="cta-button">
              <img src="src\assets\icons8-steam-96.png" alt="Steam Icon" />
              <div href="https://www.dota2.com/home">
                <span>PLAY FOR FREE</span>
                <small>DOWNLOAD ON STEAM</small>
              </div>
            </a>
          </div>
        </div>
        <section class="news-section">
          <div class="news-header">
            <h2>LATEST NEWS</h2>
            <a href="#">VIEW ALL →</a>
          </div>
          <div class="news-grid">
            <div class="news-card">
              <img src="src\assets\icefrog.jpeg" alt="icefrog" />
              <div class="news-overlay">
                <p class="date">MAY 23, 2025</p>
                <h3>ICEFROG IS BACK!!!</h3>
              </div>
            </div>
            <div class="news-card">
              <img src="src\assets\gaben.jpeg" alt="Gaben" />
              <div class="news-overlay">
                <p class="date">JUL 14, 2025</p>
                <h3>Gaben announces his favourite player</h3>
              </div>
            </div>
            <div class="news-card">
              <img
                src="src\assets\international.png"
                alt="The International 2025"
              />
              <div class="news-overlay">
                <p class="date">MAY 15, 2025</p>
                <h3>
                  The International 2025 - Direct Invites and The Road to TI
                </h3>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
