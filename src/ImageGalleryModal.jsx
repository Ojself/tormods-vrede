
import './Modal.css'; // We'll create this CSS file next

import PropTypes from 'prop-types';

function ImageGalleryModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Brukstips</h2>
        {/* Your image gallery content */}
        <p>Gallery content goes here.</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ImageGalleryModal;

ImageGalleryModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};
