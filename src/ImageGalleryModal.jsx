
import './Modal.css'; // We'll create this CSS file next
import "react-image-gallery/styles/css/image-gallery.css";

import PropTypes from 'prop-types';
import agurk from '/agurk.webp';
import cottage from '/cottage.webp';
import dumplings from '/dumplings.webp';
import egg from '/egg.webp';
import handsoap from '/hand-soap.png';
import icecream from '/ice-cream.webp';

import popcorn from '/popcorn.png';
import mashed from '/mashed.webp';
import noodles from '/noodles.webp';
import pizza from '/pizza.webp';
import ImageGallery from "react-image-gallery";




function ImageGalleryModal({ onClose }) {
  const images = [
    {
      original: agurk,
      
      description: "Agurksalat"
    },
    {
      original: cottage,
      
      description: "Cottage cheese"
    },
    {
      original: dumplings,
      
      description: "Dumplings"
    },
    {
      original: egg,
      
      description: "Egg"
    },
    {
      original: icecream,
      
      description: "Iskrem"
    },
    {
      original: noodles,
      
      description: "Noodles"
    },
    {
      original: pizza,
      
      description: "Pizza"
    },
    {
      original: popcorn,
      
      description: "Popcorn"
    },
    {
      original: mashed,
      
      description: "Potetstappe"
    },
    {
      original: handsoap,
      
      description: "Håndsåpe?"
    },
  ];
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Brukstips</h2>
        
        
        <ImageGallery showThumbnails={false} showPlayButton={false} items={images} />
        <button className="close-button" onClick={onClose}>Lukk</button>
      </div>
    </div>
  );
}

export default ImageGalleryModal;

ImageGalleryModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
