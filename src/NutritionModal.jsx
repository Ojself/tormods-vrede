
import './Modal.css';

import PropTypes from 'prop-types';

function NutritionModal({ onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Nutrition Information</h2>
                {/* Your nutrition information content */}
                <p>Nutrition details go here.</p>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

NutritionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default NutritionModal;

NutritionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};
