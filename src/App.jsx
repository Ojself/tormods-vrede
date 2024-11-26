import { useEffect, useState } from 'react';
import tormod from '/tormod.webp';
import fire from '/fire.gif';
import logo from '/logo.png';
import './App.css';
import ImageGalleryModal from "./ImageGalleryModal";
import NutritionModal from "./NutritionModal";

const ignoreTouch = (e) => {
  e.preventDefault();
}


const firePositions = [-40, -21, -2, 17, 36, 54]; // Define left positions

function App() {
  const [showImageGallery, setShowImageGallery] = useState(false);
  const [showNutrition, setShowNutrition] = useState(false);


  useEffect(() => {
    document.addEventListener('gesturestart', ignoreTouch);
    document.addEventListener('gesturechange', ignoreTouch);
    document.addEventListener('gestureend', ignoreTouch);
    return () => {
    document.removeEventListener('gesturestart', ignoreTouch);
    document.removeEventListener('gesturechange', ignoreTouch);
    document.removeEventListener('gestureend', ignoreTouch);
    };
  }, []);


  return (
    <div className="wrapper">
      <img src={tormod} className="main-img" alt="Tormods vrede" />
      <div className="right-wrapper">
        <img src={logo} className="logo" alt="Tormods vrede logo" />
        <button onClick={() => setShowImageGallery(true)}>Brukstips</button>
        <button onClick={() => setShowNutrition(true)}>Næringsinnhold</button>
      </div>
      {firePositions.map((left, index) => (
        <img
          key={index}
          src={fire}
          className="fire"
          alt="Flames"
          style={{ left: `${left}%` }}
        />
      ))}
      <div className="wordart blues">
        <span className="text">Jeg er chill bby</span>
      </div>

      {/* Render modals conditionally */}
      {showImageGallery && (
        <ImageGalleryModal onClose={() => setShowImageGallery(false)} />
      )}
      {showNutrition && (
        <NutritionModal onClose={() => setShowNutrition(false)} />
      )}
    </div>
  );
}

export default App;
