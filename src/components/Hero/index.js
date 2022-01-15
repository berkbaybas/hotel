import heroBackground from '../../assets/hero_background.png'

function Hero() {
  return (
    <main className="Hero">
      <img src={heroBackground} alt="" />
      <div className="Hero-discover">
        <div className="Hero-discover-title">
          <h1>
            Welcome the <span>Bougainvillea</span> Hotel
          </h1>
        </div>
        <p>
          This quote best describes how we would want our guests to feel. Though
          we are nestled in the heart of Bougainvillea.
        </p>
        <button>Discover More</button>
      </div>
    </main>
  )
}

export default Hero
