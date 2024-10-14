function Card() {
  return (
    <section>
      <h2>Game Populer</h2>
      <div className="grid-container">
        <div className="card">
          <img src="ml.jpeg" alt="logo mobile legends" />
          <h3>Mobile Legends</h3>
        </div>

        <div className="card">
          <img src="ff.jpeg" alt="" />
          <h3>Free Fire</h3>
        </div>

        <div className="card">
          <img src="pubg.jpeg" alt="" />
          <h3>PUBG</h3>
        </div>

        <div className="card">
          <img src="aov.jpeg" alt="" />
          <h3>Arena of valor</h3>
        </div>

        <div className="card">
          <img src="Hok.jpeg" alt="" />
          <h3>honor Of king</h3>
        </div>

        <div className="card">
          <img src="honkai.jpeg" alt="" />
          <h3>Honkai Impack</h3>
        </div>
      </div>
    </section>
  );
}

export default Card;
