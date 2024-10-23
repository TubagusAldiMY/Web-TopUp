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
      <div className="flex flex-wrap justify-center gap-2 mt-24 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center ">
        {
          gameList.map((list, index) => {
            return (
              <Cards title={list.title} key={index} img={`/Logo_Game/${list.logo}.webp`} />
            )
          })
        }
      </div >
      <div className="mt-8">
        <Footer />
      </div>
    </>
  );
}

export default App;
