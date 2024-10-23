import "./App.css";
import Footer from "./components/Fragments/Footer";
import Navbar from "./components/Fragments/Navbar";
import Cards from "./components/Fragments/Cards";
import Hero from "./components/Fragments/Hero";
import gameList from "./utils/cardsList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="md:grid md:grid-cols-3 md:grid-rows-2 md:pb-24">
        {gameList.map((list, index) => {
          return (
            <Cards
              title={list.title}
              key={index}
              img={`/Logo_Game/${list.logo}.webp`}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
