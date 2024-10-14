import "./App.css";
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  // slider for img
  const intro_img = [
    ["SlideShow/ff.webp", "Free Fire"],
    ["SlideShow/ml.jpg", "Mobile Legends"],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % intro_img.length);
    }, 2000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [intro_img.length]);

  return (
    <main>
      <div className="container-slide">
        <img
          className="mySlides"
          src={intro_img[currentSlide][0]}
          alt={intro_img[currentSlide][1]}
        />
      </div>
      <Card />
    </main>
  );
}

export default App;
