import { useEffect, useState } from "react";

export default function ImgShows() {
  // slider for img
  const intro_img = [
    ["SlideShow/ff.webp", "Free Fire"],
    ["SlideShow/ml.jpg", "Mobile Legends"],
    ["SlideShow/pubg.jpg", "PUBG"],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % intro_img.length);
    }, 2000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [intro_img.length]);
  return (
    <div className="container-slide">
      <img
        className="mySlides"
        src={intro_img[currentSlide][0]}
        alt={intro_img[currentSlide][1]}
      />
    </div>
  );
}
