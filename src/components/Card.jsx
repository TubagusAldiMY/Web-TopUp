function Card() {
  return (
    <section className="container-card">
      <h2>Game Populer</h2>
      <div className="grid-container">
        <div className="card">
          <img src="gameLogo/ml.jpeg" alt="logo mobile legends" />
          <h3>Mobile Legends</h3>
        </div>

        <div className="card">
          <img src="gameLogo/ff.jpeg" alt="" />
          <h3>Free Fire</h3>
        </div>

        <div className="card">
          <img src="gameLogo/pubg.jpeg" alt="" />
          <h3>PUBG</h3>
        </div>

        <div className="card">
          <img src="gameLogo/Hok.jpeg" alt="" />
          <h3>Honor Of king</h3>
        </div>

        {/* <div className="card">
          <img src="gameLogo/aov.jpeg" alt="" />
          <h3>Arena of valor</h3>
        </div>

        <div className="card">
          <img src="gameLogo/honkai.jpeg" alt="" />
          <h3>Honkai Impack</h3>
        </div> */}
      </div>
    </section>
  );
}

export default Card;
