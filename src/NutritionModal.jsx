import './Modal.css';
import PropTypes from 'prop-types';

function NutritionModal({ onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Ingredienser & Nutrition Information</h2>
                
                <h3>Ingredienser:</h3>
                <ul>
                    <li>1Olje</li>
                    <li>Chili flakes</li>
                    <li>Salt</li>
                </ul>

                <h3>Krycer:</h3>
                <ul>
                    <li>Stjerneanis</li>
                    <li>Kanelstang</li>
                    <li>Laurbærblad</li>
                    <li>Sichuan Pepper</li>
                </ul>

                <h3>Aromatikk</h3>
                <ul>
                    <li>Hvitløk</li>
                    <li>Shalottløk</li>
                    <li>Sesamfrø</li>
                    <li>Sesamolkje</li>
                </ul>


                <h3>Næringsinnhold (Per Spiseskje):</h3>
                <table className="nutrition-table">
                    <tbody>
                        <tr>
                            <td>Kalorier</td>
                            <td>9c kcal</td>
                        </tr>
                        <tr>
                            <td>Fett</td>
                            <td>10 g</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;Saturated Fat</td>
                            <td>2 g</td>
                        </tr>
                        <tr>
                            <td>Sodium</td>
                            <td>129 mg</td>
                        </tr>
                        <tr>
                            <td>Karbohydrater</td>
                            <td>2 g</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;Fiber</td>
                            <td>2 g</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;Sukker</td>
                            <td>1 g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>1 g</td>
                        </tr>
                    </tbody>
                </table>

                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

NutritionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default NutritionModal;
