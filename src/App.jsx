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
      <div className="
      mt-8 flex flex-wrap justify-center 
      sm:mt-14 sm:flex sm:flex-wrap sm:justify-center 
      md:mt-14 md:flex md:flex-wrap md:justify-center
      lg:mt-14 lg:flex lg:flex-wrap lg:justify-center
      ">
        {
          gameList.map((list, index) => {
            return (
              <Cards title={list.title} key={index} img={`/Logo_Game/${list.logo}.webp`} />
            )
          })
        }
      </div>

      <Footer />
    </>
  );
}

export default App;
