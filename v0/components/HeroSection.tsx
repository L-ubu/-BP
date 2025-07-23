import type React from "react"

const PlayIcon = () => (
  <svg className="play-triangle" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const AirplaneIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </svg>
)

const HeroSection: React.FC = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">BEST DESTINATIONS AROUND THE WORLD</p>

        <h2 className="hero-title">
          Travel, <span className="hero-title-highlight">enjoy</span>
          <br />
          and live a new
          <br />
          and full life
        </h2>

        <p className="hero-description">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening.
          Park gate sell they west hard for the.
        </p>

        <div className="hero-actions">
          <button className="cta-button">Find out more</button>

          <button className="play-button">
            <div className="play-icon">
              <PlayIcon />
            </div>
            <span className="play-text">Play Demo</span>
          </button>
        </div>
      </div>

      <div className="hero-image">
        <div style={{ position: "relative" }}>
          <img src="/images/travel-hero.png" alt="Happy traveler with backpack sitting on suitcase" />

          {/* Decorative airplane elements */}
          <div className="airplane-decoration airplane-1">
            <AirplaneIcon size={24} />
          </div>

          <div className="airplane-decoration airplane-2">
            <AirplaneIcon size={20} />
          </div>

          <div className="airplane-decoration airplane-3">
            <AirplaneIcon size={18} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection
