import './Modal.css';
import PropTypes from 'prop-types';
/* TODO WOW VERY HEALTHY */
function NutritionModal({ onClose }) {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <h2>Ingredienser & næringsinnhold</h2>
                
                <h3>Ingredienser:</h3>
                <ul>
                    <li>Olje</li>
                    <li>Chili flakes</li>
                    <li>Salt</li>
                </ul>
                <h3>Krydder:</h3>
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
                    <li>Sesamolje</li>
                </ul>
                <h3>Næringsinnhold (Per Spiseskje):</h3>
                <table className="nutrition-table">
                    <tbody>
                        <tr>
                            <td>Kalorier</td>
                            <td>92 kcal</td>
                        </tr>
                        <tr>
                            <td>Karbohydrater</td>
                            <td>2 g</td>
                        </tr>
                        <tr>
                            <td>Protein</td>
                            <td>1 g</td>
                        </tr>
                        <tr>
                            <td>Fett</td>
                            <td>10 g</td>
                        </tr>
                        <tr>
                            <td>&nbsp;&nbsp;Mettet Fett</td>
                            <td>8 g</td>
                        </tr>
                        <tr>
                            <td>Natrium</td>
                            <td>129 mg</td>
                        </tr>
                        <tr>
                            <td>Kalium</td>
                            <td>96 mg</td>
                        </tr>
                        
                        <tr>
                            <td>Fiber</td>
                            <td>2 g</td>
                        </tr>
                        <tr>
                            <td>Sukker</td>
                            <td>1 g</td>
                        </tr>
                        <tr>
                            <td>Vitamin A</td>
                            <td>1461 IU</td>
                        </tr>
                        <tr>
                            <td>Vitamin C</td>
                            <td>1 mg</td>
                        </tr>
                        <tr>
                            <td>Kalsium</td>
                            <td>16 mg</td>
                        </tr>
                        <tr>
                            <td>Jern</td>
                            <td>1 mg</td>
                        </tr>
                        
                    </tbody>
                </table>

                <button className="close-button" onClick={onClose}>Lukk</button>
            </div>
        </div>
    );
}

NutritionModal.propTypes = {
    onClose: PropTypes.func.isRequired,
};

export default NutritionModal;
